import { IsString } from "class-validator";

export class CreateCategoryDTO {
  @IsString()
  name: string;

  @IsString()
  image_link: string;
}
