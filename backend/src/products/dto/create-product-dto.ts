import { ArrayContains, IsArray, IsBoolean, IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsInt()
  category_id: number;
  
  @IsString()
  description: string;

  @IsString()
  large_description: string;
  
  @IsPositive()
  @IsNumber()
  price: number;

  @IsNumber()
  discount_price: number;

  @IsNumber()
  discount_percent: number;

  @IsBoolean()
  is_new: boolean;

  @IsString()
  image_link: string;

  @IsArray()
  @IsString({ each: true }) 
  other_images_link: string[];
}
