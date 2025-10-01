import { Inject, Injectable } from '@nestjs/common';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class GeneratePresignedGetUrlUseCase {
  constructor(@Inject('S3_CLIENT') private readonly s3Client: S3Client) {}

  async execute(params: {
    bucket: string;
    key: string;
    expiresInSeconds?: number;
  }): Promise<{ url: string }>
  {
    const { bucket, key, expiresInSeconds } = params;
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const url = await getSignedUrl(this.s3Client, command, { expiresIn: expiresInSeconds ?? 300 });
    return { url };
  }
}


