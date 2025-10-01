import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/guards/jwt-auth.guard';
import { GeneratePresignedUploadUrlUseCase } from 'src/application/use-cases/generate-presigned-upload-url.use-case';
import { GeneratePresignedGetUrlUseCase } from 'src/application/use-cases/generate-presigned-get-url.use-case';
import { DeleteObjectUseCase } from 'src/application/use-cases/delete-object.use-case';
import { CreatePresignedGetUrlDto, CreatePresignedUploadUrlDto, DeleteObjectDto } from '../dtos/request/storage.dto';

@ApiTags('Storage API')
@Controller('storage')
export class StorageController {
  constructor(
    private readonly generatePresignedUploadUrl: GeneratePresignedUploadUrlUseCase,
    private readonly generatePresignedGetUrl: GeneratePresignedGetUrlUseCase,
    private readonly deleteObject: DeleteObjectUseCase,
  ) {}

  @Post('presign-upload')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Gerar URL pré-assinada de upload (PUT direto no S3)' })
  @ApiResponse({ status: 200, description: 'URL gerada' })
  async presignUpload(@Body() body: CreatePresignedUploadUrlDto) {
    return this.generatePresignedUploadUrl.execute(body);
  }

  @Post('presign-get')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Gerar URL pré-assinada de leitura (GET)' })
  @ApiResponse({ status: 200, description: 'URL gerada' })
  async presignGet(@Body() body: CreatePresignedGetUrlDto) {
    return this.generatePresignedGetUrl.execute(body);
  }

  @Post('delete')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Excluir objeto do S3' })
  @ApiResponse({ status: 204, description: 'Objeto excluído' })
  async remove(@Body() body: DeleteObjectDto) {
    await this.deleteObject.execute(body);
    return;
  }
}


