import 'sst'
declare module 'sst' {
  export interface Resource {
    CF_BUCKET: import('@cloudflare/workers-types').R2Bucket
  }
}
export type {}
