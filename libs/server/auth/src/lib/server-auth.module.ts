import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UserRepository } from './repositories/user.repository';
import { ServerAuthController } from './server-auth.controller';
import { ServerAuthService } from './server-auth.service';

import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { jwtConstants } from './config/constants';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,

    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [ServerAuthController],
  providers: [
    UserRepository,
    ServerAuthService,
    LocalStrategy,

    JwtStrategy,
    /**
     * If the vast majority of your endpoints should be
     * protected by default, you can register the authentication
     * guard as a global guard and instead of using @UseGuards()
     * decorator on top of each controller, you could simply
     * flag which routes should be public.
     */
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [ServerAuthService],
})
export class ServerAuthModule {}
