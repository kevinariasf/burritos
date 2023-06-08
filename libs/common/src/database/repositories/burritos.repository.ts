import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BurritosRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.burrito.findMany({ include: { type: true } });
  }
}
