import { MiddlewareFn } from "type-graphql";
import { Context } from "../../types/Context";
import jwt from "jsonwebtoken";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    if (context.req.headers.authorization) {
      try {
        var decoded = jwt.verify(
          context.req.headers.authorization,
          "some secret"
        );
        console.log(decoded);
        return next();
      } catch (err) {
        throw new Error("not authenticated");
      }
    } else throw new Error("not authenticated");
  }
  return next();
};
