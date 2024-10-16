import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from './dto/create-product-dto';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {

        // add({algo}:CreateProductDTO) {
        //     this.prisma.product.create({
        //         data: {
        //             algo,
        //         }
        //     })
        // }
}
}
