import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { faker } from '@faker-js/faker';
import { BurritosModule } from '../src/burritos/burritos.module';
import { PrismaClient } from '@prisma/client';
import { initialize } from '../node_modules/@quramy/prisma-fabbrica/lib/initialize';
import {
  defineBurritoFactory,
  defineBurritoTypeFactory,
} from '../src/__generated__/fabbrica';
import { execSync } from 'child_process';

describe('BurritoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    execSync('npx prisma migrate reset --force');
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BurritosModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const prisma = new PrismaClient();
    initialize({ prisma });
  });

  describe('/burritos (GET)', () => {
    describe('When burritos table is empty', () => {
      it('Should return an empty array', async () => {
        const response = await request(app.getHttpServer())
          .get('/burritos')
          .expect(200);
        expect(response.body).toHaveLength(0);
      });
    });

    describe('When burritos table is not empty', () => {
      const burritosAmount = faker.number.int({ min: 2, max: 5 });
      beforeEach(async () => {
        const burritoTypeFactory = defineBurritoTypeFactory();
        const burritoFactory = defineBurritoFactory({
          defaultData: {
            type: burritoTypeFactory,
          },
        });

        for (let i = 0; i < burritosAmount; i++) {
          await burritoFactory.create();
        }
      });

      it('Should return an array with the expected length', async () => {
        const response = await request(app.getHttpServer())
          .get('/burritos')
          .expect(200);
        expect(response.body).toHaveLength(burritosAmount);
      });
    });
  });
});
