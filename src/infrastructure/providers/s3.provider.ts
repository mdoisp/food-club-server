import { S3Client } from '@aws-sdk/client-s3';

export const s3Provider = [
  {
    provide: 'S3_CLIENT',
    useFactory: () => {
      return new S3Client({
        region: process.env.AWS_REGION,
        credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        } : undefined,
      });
    },
  },
];


