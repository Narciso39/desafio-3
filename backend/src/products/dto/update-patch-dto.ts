import { CreateProductDTO } from './create-product-dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdatePatchDTO extends PartialType(CreateProductDTO) {}
