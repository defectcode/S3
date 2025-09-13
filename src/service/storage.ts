import { S3Client } from '@aws-sdk/client-s3'


export class StorageService {
    private readonly client: S3Client
    private readonly bucket: string

    public constructor() {
        this.client = new S3Client({
            endpoint: process.env['S3_ENDPOINT'],
            credentials: {
                accessKeyId: process.env['S3_ACCESS_KEY_ID']!,
                secretAccessKey: process.env['S3_SECRET_ACCESS_KEY']!,
            },
            region: process.env['S3_REGION']
        })
        this.bucket = process.env['S3_BUCKET_NAME']!
    }
}