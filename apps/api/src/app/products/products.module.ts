import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Product } from './product.model';

@Module({
  imports: [TypegooseModule.forFeature([Product])],
  controllers: [ProductsController],
  exports: [ProductsService],
  providers: [ProductsService]
})
export class ProductsModule {}
