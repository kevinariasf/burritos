import { ApiProperty } from '@nestjs/swagger';
import { BurritoType } from '@prisma/client';

export class BurritoTypeEntity implements BurritoType {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
