import { Test, TestingModule } from "@nestjs/testing";
import { CategoryController } from "../category.controller";
import { CategoryService } from "../category.service";
import { CreateCategoryDTO } from "../dto/create-category-dto";
import { UpdatePutDTO } from "../dto/update-put-dto";
import { UpdatePatchDTO } from "../dto/update-patch-dto";

const mockCategoryService = () => ({
  create: jest.fn(),
  list: jest.fn(),
  show: jest.fn(),
  update: jest.fn(),
  updatePatch: jest.fn(),
  delete: jest.fn(),
});

describe("CategoryController", () => {
  let categoryController: CategoryController;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useFactory: mockCategoryService,
        },
      ],
    }).compile();

    categoryController = module.get<CategoryController>(CategoryController);
    categoryService = module.get<CategoryService>(CategoryService);
  });

  it("should be defined", () => {
    expect(categoryController).toBeDefined();
  });

  describe("create", () => {
    it("should create a category", async () => {
      const dto: CreateCategoryDTO = { name: "New Category", image_link: "http://example.com/image.png" };
      (categoryService.create as jest.Mock).mockResolvedValue(dto);

      expect(await categoryController.create(dto)).toBe(dto);
      expect(categoryService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe("read", () => {
    it("should return a list of categories", async () => {
      const result = [{ id: 1, name: "Category 1", image_link: "http://example.com/image1.png" }];
      (categoryService.list as jest.Mock).mockResolvedValue(result);

      expect(await categoryController.read()).toBe(result);
      expect(categoryService.list).toHaveBeenCalled();
    });
  });

  describe("readOne", () => {
    it("should return a category by id", async () => {
      const result = { id: 1, name: "Category 1", image_link: "http://example.com/image1.png" };
      (categoryService.show as jest.Mock).mockResolvedValue(result);

      expect(await categoryController.readOne(1)).toBe(result);
      expect(categoryService.show).toHaveBeenCalledWith(1);
    });
  });

  describe("updatePut", () => {
    it("should update a category", async () => {
      const dto: UpdatePutDTO = { name: "Updated Category", image_link: "http://example.com/image2.png" };
      const result = { id: 1, ...dto };
      (categoryService.update as jest.Mock).mockResolvedValue(result);

      expect(await categoryController.updatePut(1, dto)).toBe(result);
      expect(categoryService.update).toHaveBeenCalledWith(1, dto);
    });
  });

  describe("updatePatch", () => {
    it("should partially update a category", async () => {
      const dto: UpdatePatchDTO = { name: "Updated Category" };
      const result = { id: 1, name: "Updated Category", image_link: "http://example.com/image1.png" };
      (categoryService.updatePatch as jest.Mock).mockResolvedValue(result);

      expect(await categoryController.updatePatch(1, dto)).toBe(result);
      expect(categoryService.updatePatch).toHaveBeenCalledWith(1, dto);
    });
  });

  describe("delete", () => {
    it("should delete a category", async () => {
      const result = { id: 1, name: "Category to delete" };
      (categoryService.delete as jest.Mock).mockResolvedValue(result);

      expect(await categoryController.delete(1)).toBe(result);
      expect(categoryService.delete).toHaveBeenCalledWith(1);
    });
  });
});
