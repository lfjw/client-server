/**
 * JWT 的验证策略
 */

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { User } from 'src/typings';

export interface ValidateJWTReturns {
  id: number;
  username: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(payload: User) {
    console.log(`JWT验证 - Step 4: 被守卫调用`);
    // 查取权限
    const item: ValidateJWTReturns = {
      id: payload.id,
      username: payload.username,
    };
    return item;
  }
}
