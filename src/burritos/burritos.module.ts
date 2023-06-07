import { Module } from '@nestjs/common';
import { BurritosService } from './burritos.service';
import { BurritosController } from './burritos.controller';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule],
  controllers: [BurritosController],
  providers: [BurritosService],
})
export class BurritosModule {}
