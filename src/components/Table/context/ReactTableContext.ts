/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react'

export interface ReactTableContextStateInterface {
  queryPageIndex: number
  queryPageSize: number
  queryTotalCount: number
  querySortBy: any[]
  queryFilters: any[]
  sortByVal: string
  filtersVal: string
}

/* eslint-disable @typescript-eslint/no-empty-function */
export interface ReactTableContextInterface {
  tableState: ReactTableContextStateInterface
  setQueryPageIndex: (pageIndexValue: number) => void
  setQueryPageSize: (pageSizeValue: number) => void
  setTotalCount: (totalCountValue: number) => void
  setSortBy: (sortByValue: any[]) => void
  setFilters: (filtersValue: any[]) => void
}

export const reactTableContextDefaultValues: ReactTableContextInterface = {
  tableState: {
    queryPageIndex: 0,
    queryPageSize: 20,
    queryTotalCount: 0,
    querySortBy: [],
    queryFilters: [],
    sortByVal: '',
    filtersVal: '',
  },
  setQueryPageIndex: () => {},
  setQueryPageSize: () => {},
  setTotalCount: () => {},
  setSortBy: () => {},
  setFilters: () => {},
}

const ReactTableContext = createContext<ReactTableContextInterface>(
  reactTableContextDefaultValues
)

export default ReactTableContext
