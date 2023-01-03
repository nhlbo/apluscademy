import { S3Client } from '@aws-sdk/client-s3'
import multer from 'multer'
import multerS3 from 'multer-s3'
import { v4 as uuidv4 } from 'uuid'

const AWS_DOMAIN_NAME = process.env.AWS_DOMAIN_NAME!
const AWS_BUCKET = process.env.AWS_BUCKET!
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!

const s3 = new S3Client({
  endpoint: `https://${AWS_DOMAIN_NAME}`,
  region: 'ap-southeast-1',
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_BUCKET,
    acl: 'public-read',
    key: function (_request, _file, cb) {
      cb(null, uuidv4())
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  })
})

export { upload }
