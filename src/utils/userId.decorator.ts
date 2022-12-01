import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from './types';

type RequestWithJwt = Request & { user: JwtPayload };

function extractUserId(req: RequestWithJwt): number {
  const { userId } = req.user;
  return userId;
}

export const UserId: (required?: boolean) => ParameterDecorator =
  createParamDecorator((required = true, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithJwt>();
    const userId = extractUserId(request);
    return userId;
  });
