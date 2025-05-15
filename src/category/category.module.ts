import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])
  ],
  providers: [CategoryService, CategoryRepository, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
