import { Inject, Injectable } from '@nestjs/common';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class DeleteObjectUseCase {
  constructor(@Inject('S3_CLIENT') private readonly s3Client: S3Client) {}

  async execute(params: { bucket: string; key: string }): Promise<void> {
    const { bucket, key } = params;
    await this.s3Client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
  }
}


