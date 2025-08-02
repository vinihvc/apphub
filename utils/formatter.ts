/**
 * Capitalize the first letter of a string and lowercase the rest
 *
 * @example
 * capitalize('hello') // 'Hello'
 * capitalize('HELLO') // 'Hello'
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Deslugify a string
 *
 * @example
 * deslugify('hello-world') // 'Hello World'
 */
export const deslugify = (str: string) => {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}
