import { BurritoEntity } from '@app/common';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BurritosService } from './burritos.service';

@Controller('burritos')
@ApiTags('burritos')
export class BurritosController {
  constructor(private readonly burritosService: BurritosService) {}

  @Get()
  @ApiOkResponse({ type: BurritoEntity, isArray: true })
  findAll() {
    return this.burritosService.findAll();
  }
}
