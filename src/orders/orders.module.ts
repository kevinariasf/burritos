import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
