/**
 * Considered truthy:
 * - `?key`, `key=true`, `key=1`, `key=yes`
 */
export const parseTruthy = (value: string | undefined): boolean =>
  typeof value !== 'undefined' && ['true', '1', 'yes', ''].includes(value)
