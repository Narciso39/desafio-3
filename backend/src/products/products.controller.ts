import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDTO } from "./dto/create-product-dto";
import { UpdatePutDTO } from "./dto/update-put-dto";
import { UpdatePatchDTO } from "./dto/update-patch-dto";

@Controller("product")
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  async create(@Body() data: CreateProductDTO) {
    return this.ProductsService.create(data);
  }
  @Get('category/:categoryId')
  async getProductsByCategory(@Param('categoryId') categoryId: string) {
    const id = parseInt(categoryId, 10);
    return this.ProductsService.getProductsByCategory(id);
  }

  @Get()
  async read() {
    return this.ProductsService.list();
  }

  @Get(":id")
  async readOne(@Param("id", ParseIntPipe) id: number) {
    return this.ProductsService.show(id);
  }

  @Put(":id")
  async updatePut(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePutDTO) {
    return this.ProductsService.update(id, data);
  }

  @Patch(":id")
  async updatePatch(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePatchDTO) {
    return this.ProductsService.updatePatch(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.ProductsService.delete(id);
  }
}
