/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { mongoose, setLogLevel, LogLevels } from '@typegoose/typegoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('Price Search')
    .setDescription('The Price Search API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  mongoose.set('debug', true);
  setLogLevel(LogLevels.DEBUG);

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    const baseUrl = `http://localhost:${port}/${globalPrefix}`;
    console.log(`Listening at ${baseUrl}`);
    console.log(`Swagger UI listening at ${baseUrl}/docs`);
  });
}

bootstrap();
