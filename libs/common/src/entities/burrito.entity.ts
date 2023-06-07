import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Burrito, BurritoSize } from '@prisma/client';
import { BurritoTypeEntity } from './burrito-type.entity';

export class BurritoEntity implements Burrito {
  @ApiProperty()
  id: number;
  @ApiProperty({ enum: BurritoSize })
  size: BurritoSize;
  @ApiProperty()
  price: number;
  @ApiPropertyOptional()
  type: BurritoTypeEntity;
  @ApiProperty()
  typeId: number;
}
