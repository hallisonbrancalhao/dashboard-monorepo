import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ServerAuthService } from '../server-auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private serverAuthService: ServerAuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.serverAuthService.validateUser({
      username,
      password,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
