import { ApiProperty } from '@nestjs/swagger';
import { BurritoOption } from '@prisma/client';

export class BurritoOptionEntity implements BurritoOption {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
}
