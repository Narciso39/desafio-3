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
    return this.prisma.product.findMany();
  }

  async show(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

   
  async update(id: number, data: UpdatePutDTO) {
    await this.exists(id);
    return this.prisma.product.update({
        data,
        where: {
            id
        }
    })
  }

  async updatePatch(id: number, data: UpdatePatchDTO) {
    await this.exists(id);
    return this.prisma.product.update({
      data,
      where: {
          id
      }
  })
  }

  async delete(id: number) {
    await this.exists(id);
    return this.prisma.product.delete({
      where: {
        id
      }
    })
  }

  // verifica se o produto existe
  async exists(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`o produto ${id} não existe`);
    }
  }
}
