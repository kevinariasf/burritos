import { Module } from '@nestjs/common';
import { PrismaService } from './database';
import * as Repositories from './database/repositories';
import { BasicGuard } from './guards';

@Module({
  providers: [PrismaService, BasicGuard].concat(
    Object.values(Repositories) as never,
  ),
  exports: [PrismaService, BasicGuard].concat(
    Object.values(Repositories) as never,
  ),
})
export class CommonModule {}
