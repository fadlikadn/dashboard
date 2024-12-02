import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios'
import axios from 'axios'

import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { baseUrl, paramsSerializer } from './config'

interface QueryApiConfig<TQueryFnData = unknown> {
  axiosConfig?: AxiosRequestConfig
  queryConfig?: UseQueryOptions<TQueryFnData>
  isAuthorized?: boolean
  queryKey?: QueryKey | null
}

interface MutationApiConfig<
  TData = unknown,
  TError = unknown,
  TVariables = void,
> {
  axiosConfig?: AxiosRequestConfig
  mutationConfig?: UseMutationOptions<TData, TError, TVariables>
  isAuthorized?: boolean
}

const DEFAULT_QUERY_CONFIG: UseQueryOptions<unknown, AxiosError> = {
  useErrorBoundary: false,
}

export const api = async <T>(
  path: string,
  options: AxiosRequestConfig,
): Promise<T> => {
  const requestApi = (): AxiosPromise<T> => {
    const url = `${baseUrl}${path}`

    return axios({
      ...options,
      paramsSerializer: options.paramsSerializer ?? paramsSerializer,
      url,
    })
  }

  try {
    const response = await requestApi()
    localStorage.setItem('server_date', response?.headers?.date)
    return response.data
  } catch (error) {
    const parsedError: AxiosError = error as AxiosError
    throw parsedError
  }
}

/**
 * Wrapper for react-query's useQuery
 * @param {string} path Request path
 * @param {object} opts.axiosConfig Axios config object
 * @param {object} opts.queryConfig React Query's query config object
 * @param {(string|Array.<*>)} opts.queryKey React Query's query key
 * @returns React Query query object
 */
export const useQueryApi = <TQueryFnData, TQueryFnError = AxiosError>(
  path: string,
  {
    axiosConfig = {},
    queryConfig = {},
    queryKey,
  }: QueryApiConfig<TQueryFnData>,
): UseQueryResult<TQueryFnData, TQueryFnError> => {
  return useQuery<TQueryFnData, TQueryFnError>(
    queryKey ?? [path, ...(axiosConfig?.params ? [axiosConfig?.params] : [])],
    (): Promise<TQueryFnData> => {
      return api<TQueryFnData>(
        path,
        {
          method: 'GET',
          ...axiosConfig,
        },
      )
    },
    {
      ...DEFAULT_QUERY_CONFIG,
      ...(queryConfig as UseQueryOptions<TQueryFnData, TQueryFnError>),
      onError: (error: TQueryFnError) => {
        if (error instanceof AxiosError) {
          console.error(error)
        }
      },
    },
  )
}

export const useMutationApi = <TData, TError = Error, TVariables = void>(
  path: string,
  {
    axiosConfig = {},
    mutationConfig = {},
  }: MutationApiConfig<TData, TError, TVariables> = {
    axiosConfig: {},
    mutationConfig: {},
  },
) => {
  return useMutation<TData, TError, TVariables>(
    (data: TVariables): Promise<TData> => {
      return api<TData>(
        path,
        {
          ...axiosConfig,
          ...(data ? { data } : {}),
        },
      )
    },
    {
      ...mutationConfig,
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.error(error)
        }
      },
    },
  )
}
