import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
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
  // @Get('category/:categoryId')
  // async getProductsByCategory(@Param('categoryId') categoryId: string) {
  //   const id = parseInt(categoryId, 10);
  //   return this.ProductsService.getProductsByCategory(id);
  // }
  @Get("category/:categoryId")
  async getProductsByCategory(
    @Param("categoryId", ParseIntPipe) categoryId: number,
    @Query("page") page: string = "1", // Recebe o número da página
    @Query("limit") limit: string = "16", // Recebe o limite de produtos por página
    @Query("order") order: "asc" | "desc" = "asc", // Recebe a ordem
    @Query("sortBy") sortBy: string = "price", // Recebe o campo para ordenação
  ) {
    const id = categoryId;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    return this.ProductsService.getProductsByCategory(id, pageNumber, limitNumber, order, sortBy);
  }

  // @Get()
  // async read() {
  //   return this.ProductsService.list();
  // }

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

  // paginação

  @Get()
  async listProducts(
    @Query("page", ParseIntPipe) page: number = 1, // Parâmetro de página
    @Query("limit", ParseIntPipe) limit: number = 16, // Parâmetro de limite por página
    @Query("order") order: "asc" | "desc" = "asc", // Parâmetro de ordenação (asc/desc)
    @Query("sortBy") sortBy: string = "price", // Campo para ordenar, por padrão 'price'
  ) {
    return this.ProductsService.listPage(page, limit, order, sortBy);
  }
}
