import { Inject, Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class GeneratePresignedUploadUrlUseCase {
  constructor(@Inject('S3_CLIENT') private readonly s3Client: S3Client) {}

  async execute(params: {
    bucket: string;
    key: string;
    contentType: string;
    expiresInSeconds?: number;
  }): Promise<{ uploadUrl: string; key: string }>
  {
    const { bucket, key, contentType, expiresInSeconds } = params;
    const command = new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType });
    const uploadUrl = await getSignedUrl(this.s3Client, command, { expiresIn: expiresInSeconds ?? 300 });
    return { uploadUrl, key };
  }
}


