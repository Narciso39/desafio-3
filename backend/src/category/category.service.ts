import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDTO } from "./dto/create-category-dto";
import { UpdatePutDTO } from "./dto/update-put-dto";
import { UpdatePatchDTO } from "./dto/update-patch-dto";

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

  async update(id: number, data: UpdatePutDTO) {
    await this.exists(id);
    return this.prisma.category.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePatch(id: number, data: UpdatePatchDTO) {
    await this.exists(id);
    return this.prisma.category.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.category.delete({
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
