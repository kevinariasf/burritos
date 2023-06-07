import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BurritosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.burrito.findMany({ include: { type: true } });
  }
}
