import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.order.findMany({});
  }

  findOne(id: number) {
    return this.prisma.order.findFirst({
      include: {
        orderItems: {
          include: {
            orderItemBurritoOptions: { include: { burritoOption: true } },
            burrito: true,
          },
        },
      },
      where: { id },
    });
  }
}
