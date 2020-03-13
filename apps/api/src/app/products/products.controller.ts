import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Crud({
  model: {
    type: Product
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id'
    }
  }
})
@ApiTags(Product.name)
@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}
}
