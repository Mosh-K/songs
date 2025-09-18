import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_CONFIG } from './DB_CONFIG';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SongsModule, DB_CONFIG],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
