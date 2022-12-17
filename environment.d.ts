export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGO_DB_URL: string
    }
  }
}
