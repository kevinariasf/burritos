import { OrdersRepository } from '@app/common';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  findAll() {
    return this.ordersRepository.findAll();
  }

  async findOne(id: number) {
    const order = await this.ordersRepository.findOne(id);
    if (!order) throw new NotFoundException();
    return order;
  }
}
