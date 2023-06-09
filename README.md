# Techstack

- NestJS
- Docker
- Postgres
- Prisma
- Jest
- Supertest
- Github actions
- AWS Elastic beanstalk

# Requirements to run locally

- Node 16
- Docker

## How to run locally

1.  `npm install`
2.  `docker-compose up -d`
3.  `npx prisma migrate dev`
4.  `npx prisma generate`
5.  `npm run start:dev`
6.  Go to **http://localhost:3000/api**

## How to use Swagger

1.  Go to **http://kevin-burritos.us-east-2.elasticbeanstalk.com/api** or **http://localhost:3000/api** in local
2.  Click on "Authorize", see the following image
    ![](/docs/step-2.png)
3.  Fill with the mandatory key **acme123**, see the following image
    ![](/docs/step-3.png)

## How to run tests

- Run `npm run test:e2e` after executing the steps of **how to run locally** section

## How to access the deployed app

The application is deployed in AWS using Elastic Beanstalk and the url to access the app is the following: **http://kevin-burritos.us-east-2.elasticbeanstalk.com/api**
