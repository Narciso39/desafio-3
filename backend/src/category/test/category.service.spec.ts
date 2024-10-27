import { Test, TestingModule } from "@nestjs/testing";
import { CategoryService } from "../category.service";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateCategoryDTO } from "../dto/create-category-dto";
import { UpdatePutDTO } from "../dto/update-put-dto";

describe('CategoryService', () => {
    let service: CategoryService;
    let prisma: PrismaService;
  
    // Mock do PrismaService
    const mockPrismaService = {
      category: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          CategoryService,
          {
            provide: PrismaService,
            useValue: mockPrismaService,
          },
        ],
      }).compile();
  
      service = module.get<CategoryService>(CategoryService);
      prisma = module.get<PrismaService>(PrismaService);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should create a category', async () => {
      const category: CreateCategoryDTO = {
        name: 'Test Category',
        image_link: 'http://example.com/image.jpg',
      };
  
      mockPrismaService.category.create.mockResolvedValue(category);
  
      const result = await service.create(category);
      expect(result).toEqual(category);
      expect(mockPrismaService.category.create).toHaveBeenCalledWith({
        data: {
          name: 'Test Category',
          image_link: 'http://example.com/image.jpg',
        },
      });
    });
  
    it('should find all categories', async () => {
      const categories = [
        { id: 1, name: 'Category 1', image_link: 'http://example.com/image1.jpg' },
        { id: 2, name: 'Category 2', image_link: 'http://example.com/image2.jpg' },
      ];
  
      mockPrismaService.category.findMany.mockResolvedValue(categories);
  
      const result = await service.list();
      expect(result).toEqual(categories);
      expect(mockPrismaService.category.findMany).toHaveBeenCalled();
    });
  
    it('should find one category', async () => {
      const category = { id: 1, name: 'Category 1', image_link: 'http://example.com/image1.jpg' };
  
      mockPrismaService.category.findUnique.mockResolvedValue(category);
  
      const result = await service.show(1);
      expect(result).toEqual(category);
      expect(mockPrismaService.category.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  
    it('should update a category', async () => {
      const updatedCategory: UpdatePutDTO = {
        name: 'Updated Category',
        image_link: 'http://example.com/updated_image.jpg',
      };
  
      const category = { id: 1, ...updatedCategory };
  
      mockPrismaService.category.update.mockResolvedValue(category);
  
      const result = await service.update(1, updatedCategory);
      expect(result).toEqual(category);
      expect(mockPrismaService.category.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updatedCategory,
      });
    });
  
    it('should remove a category', async () => {
      const id = 1;
  
      mockPrismaService.category.delete.mockResolvedValue({ id });
  
      const result = await service.delete(id);
      expect(result).toEqual({ id });
      expect(mockPrismaService.category.delete).toHaveBeenCalledWith({ where: { id } });
    });
  });
  