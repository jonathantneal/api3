/**
 * Considered truthy:
 * - `?key`, `key=true`, `key=1`, `key=yes`, `key=`
 */
export function parseTruthy(value: string | undefined | boolean = false): boolean {
  if (['true', '1', 'yes', '', true].includes(value)) return true
  return false
}
