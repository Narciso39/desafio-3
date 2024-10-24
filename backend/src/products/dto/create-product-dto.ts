import { 
  IsArray, 
  IsBoolean, 
  IsInt, 
  IsNumber, 
  IsOptional, 
  IsPositive, 
  IsString, 
  MaxLength, 
  Min, 
  IsNotEmpty 
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100) 
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50) 
  sku: string;

  @IsInt()
  category_id: number;
  
  @IsString()
  @IsOptional()
  @MaxLength(250) 
  description: string;

  @IsString()
  @IsOptional()
  @MaxLength(500) 
  large_description: string;
  
  @IsPositive()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_price?: number;

  @IsOptional()
  @Min(0)
  @IsNumber()
  discount_percent?: number;

  @IsBoolean()
  is_new: boolean;

  @IsString()
  @IsNotEmpty()
  image_link: string;

  @IsArray()
  @IsString({ each: true }) 
  other_images_link: string[];
  
  // Métodos para arredondamento
  get roundedPrice(): number {
    return parseFloat(this.price.toFixed(2));
  }

  get roundedDiscountPrice(): number | undefined {
    return this.discount_price ? parseFloat(this.discount_price.toFixed(2)) : undefined;
  }
}
