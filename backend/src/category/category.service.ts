import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategoryDTO } from "./dto/create-category-dto";

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ name, image_link }: CreateCategoryDTO) {
    return this.prisma.category.create({
      data: {
        name,
        image_link,
      },
    });
  }

  async list() {
    return this.prisma.category.findMany();
  }

  async show(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  // verifica se o produto existe
  async exists(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`o produto ${id} não existe`);
    }
  }
}
