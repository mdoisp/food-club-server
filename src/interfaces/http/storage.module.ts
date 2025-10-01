import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { StorageController } from './controllers/storage.controller';
import { s3Provider } from 'src/infrastructure/providers/s3.provider';
import { GeneratePresignedUploadUrlUseCase } from 'src/application/use-cases/generate-presigned-upload-url.use-case';
import { GeneratePresignedGetUrlUseCase } from 'src/application/use-cases/generate-presigned-get-url.use-case';
import { DeleteObjectUseCase } from 'src/application/use-cases/delete-object.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [StorageController],
  providers: [
    ...s3Provider,
    GeneratePresignedUploadUrlUseCase,
    GeneratePresignedGetUrlUseCase,
    DeleteObjectUseCase,
  ],
  exports: [
    GeneratePresignedUploadUrlUseCase,
    GeneratePresignedGetUrlUseCase,
    DeleteObjectUseCase,
  ],
})
export class StorageModule {}


