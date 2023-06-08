import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderItem } from '@prisma/client';
import { BurritoEntity } from './burrito.entity';
import { OrderItemBurritoOptionEntity } from './order-item-burrito-option.entity';

export class OrderItemEntity implements OrderItem {
  @ApiProperty()
  id: number;
  @ApiProperty()
  orderId: number;
  @ApiProperty()
  burritoId: number;
  @ApiProperty()
  quantity: number;
  @ApiPropertyOptional({ type: BurritoEntity })
  burrito: BurritoEntity;
  @ApiPropertyOptional({ type: OrderItemBurritoOptionEntity, isArray: true })
  orderItemBurritoOptions: OrderItemBurritoOptionEntity[];
}
