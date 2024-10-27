import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category-dto";
import { UpdatePutDTO } from "./dto/update-put-dto";
import { UpdatePatchDTO } from "./dto/update-patch-dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}
  @Post()
  async create(@Body() data: CreateCategoryDTO) {
    return this.CategoryService.create(data);
  }
  @Get()
  async read() {
    return this.CategoryService.list();
  }

  @Get(":id")
  async readOne(@Param("id", ParseIntPipe) id: number) {
    return this.CategoryService.show(id);
  }

  @Put("update/:id")
  async updatePut(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePutDTO) {
    return this.CategoryService.update(id, data);
  }

  @Patch("parcial/:id")
  async updatePatch(@Param("id", ParseIntPipe) id: number, @Body() data: UpdatePatchDTO) {
    return this.CategoryService.updatePatch(id, data);
  }

  @Delete("destroy/:id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.CategoryService.delete(id);
  }
}
