import { User } from "../../../entity/user.entity";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  firstname!: string;

  @Field()
  lastname!: string;

  @Field()
  email!: string;

  @Field({ nullable: true })
  phone?: number;

  @Field()
  born!: Date;

  @Field()
  password!: string;
}
