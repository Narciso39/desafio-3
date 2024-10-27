import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dto/create-product-dto";
import { UpdatePatchDTO } from "./dto/update-patch-dto";
import { UpdatePutDTO } from "./dto/update-put-dto";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ name, sku, category_id, description, price, discount_percent, discount_price, image_link, is_new, large_description, other_images_link }: CreateProductDTO) {
    return this.prisma.product.create({
      data: {
        name,
        sku,
        description,
        price,
        discount_percent,
        discount_price,
        image_link,
        is_new,
        large_description,
        other_images_link,
        category: {
          connect: { id: category_id },
        },
      },
    });
  }

  async list() {
    return this.prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async show(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdatePutDTO) {
    await this.exists(id);
    return this.prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePatch(id: number, data: UpdatePatchDTO) {
    await this.exists(id);
    return this.prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }

  async getProductsByCategory(categoryId: number, page: number = 1, limit: number = 16, order: "asc" | "desc" = "asc", sortBy: string = "price") {
    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
      this.prisma.product.findMany({
        where: { category_id: categoryId },
        skip,
        take: limit,
        orderBy: {
          [sortBy]: order,
        },
        include: {
          category: true,
        },
      }),
      this.prisma.product.count({
        where: { category_id: categoryId },
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      products,
      totalPages,
      currentPage: page,
      totalCount,
    };
  }

  // verifica se o produto existe
  async exists(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`o produto ${id} não existe`);
    }
  }

  // paginação

  async listPage(page: number = 1, limit: number = 16, order: "asc" | "desc" = "asc", sortBy: string = "price") {
    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: {
          [sortBy]: order,
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
      }),
      this.prisma.product.count(),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      products,
      totalPages,
      currentPage: page,
      totalCount,
    };
  }
}
