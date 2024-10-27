import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product-dto';
import { UpdatePatchDTO } from './dto/update-patch-dto';
import { UpdatePutDTO } from './dto/update-put-dto';

describe('ProductsService', () => {
    let service: ProductsService;
    let prismaService: PrismaService;

    const mockProduct = {
        id: 1,
        name: 'Product Name',
        sku: 'SKU123',
        category_id: 1,
        description: 'Product Description',
        price: 100,
        discount_price: 80,
        discount_percent: 20,
        is_new: true,
        image_link: 'link/to/image.jpg',
        large_description: 'Large Description',
        other_images_link: ['link/to/image2.jpg'],
        created_date: new Date(),
        updated_date: new Date(),
    };

    const mockPrismaService = {
        product: {
            create: jest.fn().mockResolvedValue(mockProduct),
            findUnique: jest.fn().mockResolvedValue(mockProduct),
            update: jest.fn().mockResolvedValue(mockProduct),
            delete: jest.fn().mockResolvedValue(mockProduct),
            findMany: jest.fn().mockResolvedValue([mockProduct]),
            count: jest.fn().mockResolvedValue(1),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<ProductsService>(ProductsService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should create a product', async () => {
        const dto: CreateProductDTO = {
            name: 'New Product',
            sku: 'NEWSKU123',
            category_id: 1,
            description: 'New Product Description',
            large_description: 'New Large Description',
            price: 100,
            discount_price: 80,
            discount_percent: 20,
            is_new: true,
            image_link: 'link/to/new/image.jpg',
            other_images_link: ['link/to/new/image2.jpg'],
            roundedPrice: 0,
            roundedDiscountPrice: 0
        };

        expect(await service.create(dto)).toEqual(mockProduct);
        expect(prismaService.product.create).toHaveBeenCalledWith({ data: expect.any(Object) });
    });

    it('should find a product by id', async () => {
        await service.show(1);
        expect(prismaService.product.findUnique).toHaveBeenCalledWith({ 
            where: { id: 1 }, 
            include: { 
                category: { 
                    select: { name: true } 
                } 
            } 
        });
    });
    it('should update a product', async () => {
        const updateData: UpdatePutDTO = {
            name: 'Updated Product',
            sku: 'SKU123',
            category_id: 1,
            description: 'Updated Description',
            price: 110,
            discount_price: 90,
            discount_percent: 20,
            is_new: false,
            image_link: 'link/to/updated/image.jpg',
            large_description: 'Updated Large Description',
            other_images_link: ['link/to/updated/image2.jpg'],
            roundedPrice: 0,
            roundedDiscountPrice: 0
        };

        expect(await service.update(1, updateData)).toEqual(mockProduct);
        expect(prismaService.product.update).toHaveBeenCalledWith({ where: { id: 1 }, data: updateData });
    });

    it('should delete a product', async () => {
        expect(await service.delete(1)).toEqual(mockProduct);
        expect(prismaService.product.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException if product does not exist', async () => {
        jest.spyOn(prismaService.product, 'findUnique').mockResolvedValue(null); 
        
        await expect(service.show(44)).rejects.toThrow(NotFoundException);
    });
    
});
