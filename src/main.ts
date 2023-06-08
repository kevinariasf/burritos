import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BasicGuard } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Burritos API')
    .setDescription('The Burritos API description')
    .setVersion('1')
    .addBearerAuth(
      { type: 'http', in: 'header', description: 'Type in the input: acme123' },
      'Authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalGuards(new BasicGuard());

  await app.listen(5000);
}
bootstrap();
