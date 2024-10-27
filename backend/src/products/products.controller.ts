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

  @Get("category/:categoryId")
  async getProductsByCategory(
    @Param("categoryId", ParseIntPipe) categoryId: number,
    @Query("page") page: string = "1",
    @Query("limit") limit: string = "16",
    @Query("order") order: "asc" | "desc" = "asc",
    @Query("sortBy") sortBy: string = "price",
  ) {
    const id = categoryId;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    return this.ProductsService.getProductsByCategory(id, pageNumber, limitNumber, order, sortBy);
  }

  @Get(":id")
  async readOne(@Param("id", ParseIntPipe) id: number) {
    return this.ProductsService.show(id);
  }

  @Put("update/:id")
  async updatePut(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePutDTO) {
    return this.ProductsService.update(id, data);
  }

  @Patch("parcial/:id")
  async updatePatch(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePatchDTO) {
    return this.ProductsService.updatePatch(id, data);
  }

  @Delete("destroy/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.ProductsService.delete(id);
  }

  // paginação

  @Get()
  async listProducts(
    @Query("page", ParseIntPipe) page: number = 1,
    @Query("limit", ParseIntPipe) limit: number = 16,
    @Query("order") order: "asc" | "desc" = "asc",
    @Query("sortBy") sortBy: string = "price",
  ) {
    return this.ProductsService.listPage(page, limit, order, sortBy);
  }
}
