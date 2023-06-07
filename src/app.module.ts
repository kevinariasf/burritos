import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurritosModule } from './burritos/burritos.module';

@Module({
  imports: [BurritosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
