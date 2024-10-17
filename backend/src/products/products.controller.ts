import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDTO } from "./dto/create-product-dto";

@Controller("product")
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  async create(@Body() data: CreateProductDTO) {
    return this.ProductsService.create(data);
  }

  @Get()
  async read() {
    return this.ProductsService.list();
  }

  @Get(":id")
  async readOne(@Param("id", ParseIntPipe) id: number) {
    return this.ProductsService.show(id);
  }
}
