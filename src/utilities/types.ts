export type Pretty<T> = {
  [K in keyof T]: T[K]
} & {}

export type Environment = Pretty<Env>

export type RPC_Response<T = string> = {
  jsonrpc: '2.0'
  id: number | null
  error?: { code: number; message: string }
  result: T
}
