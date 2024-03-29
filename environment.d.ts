export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGO_DB_URL: string
      SESSION_SECRET: string
      FACEBOOK_ID: string
      FACEBOOK_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      APLUSCADEMY_USERNAME: string
      APLUSCADEMY_PASSWORD: string
      CALLBACK_DOMAIN: string
      AWS_ACCESS_KEY_ID: string
      AWS_SECRET_ACCESS_KEY: string
      AWS_DOMAIN_NAME: string
      AWS_BUCKET: string
    }
  }
}
