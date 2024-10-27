import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product-dto';
import { UpdatePutDTO } from './dto/update-put-dto';
import { UpdatePatchDTO } from './dto/update-patch-dto';
import { NotFoundException } from '@nestjs/common';

describe('ProductsController', () => {
    let controller: ProductsController;
    let service: ProductsService;

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
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                {
                    provide: ProductsService,
                    useValue: {
                        create: jest.fn().mockResolvedValue(mockProduct),
                        show: jest.fn().mockResolvedValue(mockProduct),
                        update: jest.fn().mockResolvedValue(mockProduct),
                        delete: jest.fn().mockResolvedValue(mockProduct),
                    },
                },
            ],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
        service = module.get<ProductsService>(ProductsService);
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

        expect(await controller.create(dto)).toEqual(mockProduct);
    });

    it('should find a product by id', async () => {
        expect(await controller.readOne(1)).toEqual(mockProduct);
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

        expect(await controller.updatePut(1, updateData)).toEqual(mockProduct);
    });

    it('should delete a product', async () => {
        expect(await controller.delete(1)).toEqual(mockProduct);
    });

    it('should throw NotFoundException if product does not exist', async () => {
        jest.spyOn(service, 'show').mockRejectedValue(new NotFoundException('Product not found'));

        await expect(controller.readOne(99)).rejects.toThrow(NotFoundException);
    });
});
