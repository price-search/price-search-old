import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  @prop({ required: true })
  name: string;
}
