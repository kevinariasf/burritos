import { BurritosRepository } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BurritosService {
  constructor(private burritosRepository: BurritosRepository) {}

  findAll() {
    return this.burritosRepository.findAll();
  }
}
