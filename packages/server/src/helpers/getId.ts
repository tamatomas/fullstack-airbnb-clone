import { Context } from '../types/Context';
import jwt from 'jsonwebtoken';

export const getId = (ctx: Context) => {
  let id = ctx.req!.session!.userId;

  if (!id && ctx.req.headers.authorization) {
    var decoded = jwt.verify(
      ctx.req.headers.authorization.toString(),
      'some secret'
    );
    id = (decoded as { id: string }).id;
  }

  return id;
};