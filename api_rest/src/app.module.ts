import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Scd40Service } from './scd40.service';
import { Scd40Controller } from './scd40.controller';

import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    })
  ],
  controllers: [AppController, Scd40Controller],
  providers: [AppService, Scd40Service],
})
export class AppModule {}
