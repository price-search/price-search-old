import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { MongooseCrudService } from 'nest-crud-mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ProductsService extends MongooseCrudService<
  DocumentType<Product>
> {
  constructor(@InjectModel(Product) public repo: ModelType<Product>) {
    super(repo);
  }
}
