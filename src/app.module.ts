import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurritosModule } from './burritos/burritos.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BurritosModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
