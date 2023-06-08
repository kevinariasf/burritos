import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { faker } from '@faker-js/faker';
import { OrdersModule } from '../src/orders/orders.module';
import { Order, PrismaClient } from '@prisma/client';
import { initialize } from '../node_modules/@quramy/prisma-fabbrica/lib/initialize';
import { clearDatabase, orderFactory } from '@app/common';
import { orderItemBurritoOptionFactory } from '@app/common/database/factories/order-item-burrito-option.factory';
import { orderItemFactory } from '@app/common/database/factories/order-item.factory';

describe('OrderController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    await clearDatabase();
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OrdersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const prisma = new PrismaClient();
    initialize({ prisma });
  });

  describe('/orders (GET)', () => {
    describe('When orders table is empty', () => {
      it('Should return an empty array', async () => {
        const response = await request(app.getHttpServer())
          .get('/orders')
          .expect(200);
        expect(response.body).toHaveLength(0);
      });
    });

    describe('When orders table is not empty', () => {
      const ordersAmount = faker.number.int({ min: 2, max: 5 });
      beforeEach(async () => {
        await orderFactory.createList(ordersAmount);
      });

      it('Should return an array with the expected length', async () => {
        const response = await request(app.getHttpServer())
          .get('/orders')
          .expect(200);
        expect(response.body).toHaveLength(ordersAmount);
      });
    });
  });

  describe('/orders/:id (GET)', () => {
    describe('When the order does not exist', () => {
      it('Should return a not found exception', async () => {
        await request(app.getHttpServer()).get('/orders/-1').expect(404);
      });
    });

    describe('When the order exists', () => {
      let order: Order;
      beforeEach(async () => {
        order = await orderFactory.create();
        const orderItem = await orderItemFactory.create({
          order: { connect: { id: order.id } },
        });
        await orderItemBurritoOptionFactory.create({
          orderItem: { connect: { id: orderItem.id } },
        });
      });

      it('Should return the order with its details', async () => {
        const response = await request(app.getHttpServer())
          .get(`/orders/${order.id}`)
          .expect(200);
        expect(response.body.orderItems).toHaveLength(1);
        expect(
          response.body.orderItems[0].orderItemBurritoOptions,
        ).toHaveLength(1);
      });
    });
  });
});
