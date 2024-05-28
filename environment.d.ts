interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'test' | 'production'
  readonly PORT: string
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables
}
