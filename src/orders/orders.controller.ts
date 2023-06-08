import { OrderEntity } from '@app/common';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrderEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }
}
