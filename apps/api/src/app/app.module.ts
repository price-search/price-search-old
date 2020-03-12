import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ProductsModule,
    TypegooseModule.forRoot('mongodb://localhost:27017/price-search')
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
