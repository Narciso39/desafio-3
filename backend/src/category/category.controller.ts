import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO } from "./dto/create-category-dto";

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

  @Put(":id")
  async updatePut(@Param("id", ParseIntPipe) id: number, @Body() data: CreateCategoryDTO) {
    return this.CategoryService.update(id, data);
  }


}
