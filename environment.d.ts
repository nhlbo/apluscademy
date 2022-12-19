export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGO_DB_URL: string
      SESSION_SECRET: string
      FACEBOOK_ID: string
      FACEBOOK_SECRET: string
    }
  }
}
