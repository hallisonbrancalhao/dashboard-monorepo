import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerAuthModule } from '@dashboard-monorepo/server/auth';

@Module({
  imports: [ServerAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
