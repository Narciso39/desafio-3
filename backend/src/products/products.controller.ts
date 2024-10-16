import { Body, Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('product')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {
    
    // @Post()
    //  create(@Body(), ) {
    // }
  }
}
