import { Module } from '@nestjs/common';
import { PrismaService } from './database';
import * as Repositories from './database/repositories';

@Module({
  providers: [PrismaService].concat(Object.values(Repositories) as never),
  exports: [PrismaService].concat(Object.values(Repositories) as never),
})
export class CommonModule {}
