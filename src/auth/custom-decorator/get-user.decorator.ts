import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from '../model/user.entity';

export const GetUser = createParamDecorator(
  //create param decorator로 커스텀 데코레이터 만듦
  (data, ctx: ExecutionContext): Users => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
