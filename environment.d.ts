interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'test' | 'production'
  readonly PORT: string
  readonly CLOUDFLARE_API_TOKEN: string
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
