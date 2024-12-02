import queryString from 'qs'

export const baseUrl = 'http://localhost:3000'
export const apiBaseUrl = 'http://localhost:3000/api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const paramsSerializer = (params: any): string =>
  queryString.stringify(params ?? {}, { arrayFormat: 'indices' })