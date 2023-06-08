import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { OrderItemEntity } from './order-item.entity';

export class OrderEntity implements Order {
  @ApiProperty()
  id: number;
  @ApiProperty()
  totalCost: number;
  @ApiProperty()
  createdAt: Date;
  @ApiPropertyOptional({ type: OrderItemEntity, isArray: true })
  orderItems: OrderItemEntity[];
}
