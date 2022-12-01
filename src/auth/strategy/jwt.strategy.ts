import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'ASDFASDFASDFASDFASDF', // process.env.JWTSECRET 와 같이 실제로는 환경 변수를 사용해주세요.
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
