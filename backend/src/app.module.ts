import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [ProductsModule, CategoryModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
