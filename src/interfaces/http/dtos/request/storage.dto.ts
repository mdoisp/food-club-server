import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePresignedUploadUrlDto {
  @ApiProperty({ example: 'foodclub-uploads', description: 'Nome do bucket S3' })
  @IsString()
  @IsNotEmpty()
  bucket: string;

  @ApiProperty({ example: 'users/123/profile.jpg', description: 'Chave/Key do objeto' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({ example: 'image/jpeg', description: 'MIME type do arquivo' })
  @IsString()
  @IsNotEmpty()
  contentType: string;

  @ApiProperty({ required: false, example: 300, description: 'Expiração em segundos (opcional)' })
  @IsOptional()
  expiresInSeconds?: number;
}

export class CreatePresignedGetUrlDto {
  @ApiProperty({ example: 'foodclub-uploads' })
  @IsString()
  @IsNotEmpty()
  bucket: string;

  @ApiProperty({ example: 'users/123/profile.jpg' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({ required: false, example: 300 })
  @IsOptional()
  expiresInSeconds?: number;
}

export class DeleteObjectDto {
  @ApiProperty({ example: 'foodclub-uploads' })
  @IsString()
  @IsNotEmpty()
  bucket: string;

  @ApiProperty({ example: 'users/123/profile.jpg' })
  @IsString()
  @IsNotEmpty()
  key: string;
}


