import { User } from "../../entity/user.entity";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Context } from "../../types/Context";
import { DI } from "../../main";
import { getId } from "../../helpers/getId";
import { redis } from "../../redis";
import { confirmUserPrefix, forgotPasswordPrefix } from "../../constants";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import { sendEmail } from "../../helpers/sendEmail";
import { RegisterInput } from "./register/RegisterInput";
import { createConfirmationUrl } from "../../helpers/createConfirmationOnUrl";

@Resolver()
export class UserResolver {
  @UseMiddleware()
  @Query(() => User)
  async data(@Ctx() ctx: Context): Promise<User> {
    const user = await DI.em.findOne(
      User,
      { id: getId(ctx) },
      { populate: true }
    );

    return user!;
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    { firstname, lastname, email, password, born, phone }: RegisterInput
  ): Promise<User> {
    const user = new User();
    const hashedPassword = await bcrypt.hash(password, 12);

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = hashedPassword;
    user.born = born;
    user.confirmed = false;
    user.phone = phone;

    await DI.em.persist(user).flush();

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }

  @Mutation(() => String)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: Context
  ): Promise<String> {
    const user = await DI.em.findOne(User, { email: email });

    if (!user) throw new Error("user not found");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) throw new Error("invalid password");

    if (!user.confirmed) throw new Error("user not confirmed");

    ctx.req.session!.userId = user.id;

    const payload = { id: user.id, expiresIn: "7 days" };
    const token = jwt.sign(payload, "some secret");

    ctx.req.session!.cookie.maxAge = 1000 * 60 * 60 * 24 * 5;

    return token;
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Arg("email") email: string): Promise<boolean> {
    const user = await DI.em.findOne(User, { email });

    if (!user) return true;
    const token = v4();
    await redis.set(forgotPasswordPrefix + token, user.id, "ex", 60 * 60 * 24);

    await sendEmail(
      email,
      `http://localhost:3000/user/change-password/${token}`
    );
    return true;
  }

  @Mutation(() => Boolean)
  async confirmUser(@Arg("token") token: string): Promise<boolean> {
    const userId = await redis.get(confirmUserPrefix + token);

    if (!userId) {
      return false;
    }
    const user = await DI.em.findOne(User, { id: parseInt(userId) });

    if (user) {
      user.confirmed = true;
      await DI.em.flush();
    } else {
      return false;
    }

    await redis.del(token);

    return true;
  }

  @Mutation(() => User, {
    nullable: true,
  })
  async changePassword(
    @Arg("token") token: string,
    @Arg("password") password: string,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await DI.em.findOne(User, { id: parseInt(userId) });

    if (!user) {
      return null;
    }

    await redis.del(forgotPasswordPrefix + token);

    user.password = await bcrypt.hash(password, 12);

    await DI.em.flush();

    ctx.req.session!.userId = user.id;

    return user;
  }
}
