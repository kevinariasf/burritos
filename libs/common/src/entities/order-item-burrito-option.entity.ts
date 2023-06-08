import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderItemBurritoOption } from '@prisma/client';
import { BurritoOptionEntity } from './burrito-option.entity';
import { OrderItemEntity } from './order-item.entity';

export class OrderItemBurritoOptionEntity implements OrderItemBurritoOption {
  @ApiProperty()
  orderItemId: number;
  @ApiProperty()
  burritoOptionId: number;
  @ApiPropertyOptional({ type: OrderItemEntity })
  orderItem: OrderItemEntity;
  @ApiPropertyOptional({ type: BurritoOptionEntity })
  burritoOption: BurritoOptionEntity;
}
