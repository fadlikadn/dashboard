/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context, FC, ReactNode, useReducer } from 'react'

import ReactTableContext, {
  ReactTableContextInterface,
  ReactTableContextStateInterface,
} from './ReactTableContext'
import { convertFilters, convertSortBySingle } from '../helpers'

const PAGE_CHANGED = 'PAGE_CHANGED'
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED'
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED'
const SORT_BY_CHANGED = 'SORT_BY_CHANGED'
const FILTERS_CHANGED = 'FILTERS_CHANGED'

interface PageChangedAction {
  type: typeof PAGE_CHANGED
  payload: {
    pageIndex: number
  }
}

interface PageSizeChangedAction {
  type: typeof PAGE_SIZE_CHANGED
  payload: {
    pageSize: number
  }
}

interface TotalCountChangedAction {
  type: typeof TOTAL_COUNT_CHANGED
  payload: {
    totalCount: number
  }
}

interface SortByChangedAction {
  type: typeof SORT_BY_CHANGED
  payload: {
    sortBy: any[]
  }
}

interface FiltersChangedAction {
  type: typeof FILTERS_CHANGED
  payload: {
    filters: any[]
  }
}

type ActionTypes =
  | PageChangedAction
  | PageSizeChangedAction
  | TotalCountChangedAction
  | SortByChangedAction
  | FiltersChangedAction

const PAGE_CHANGED_ACTION_CREATOR = (pageIndex: number): PageChangedAction => ({
  type: PAGE_CHANGED,
  payload: {
    pageIndex,
  },
})

const PAGE_SIZE_CHANGED_ACTION_CREATOR = (
  pageSize: number
): PageSizeChangedAction => ({
  type: PAGE_SIZE_CHANGED,
  payload: {
    pageSize,
  },
})

const TOTAL_COUNT_CHANGED_ACTION_CREATOR = (
  totalCount: number
): TotalCountChangedAction => ({
  type: TOTAL_COUNT_CHANGED,
  payload: {
    totalCount,
  },
})

const SORT_BY_CHANGED_ACTION_CREATOR = (
  sortBy: any[]
): SortByChangedAction => ({
  type: SORT_BY_CHANGED,
  payload: {
    sortBy,
  },
})

const FILTERS_CHANGED_ACTION_CREATOR = (
  filters: any[]
): FiltersChangedAction => ({
  type: FILTERS_CHANGED,
  payload: {
    filters,
  },
})

const defaultState: ReactTableContextStateInterface = {
  queryPageIndex: 0,
  queryPageSize: 20,
  queryTotalCount: 0,
  querySortBy: [],
  queryFilters: [],
  sortByVal: '',
  filtersVal: '',
}

const tableReducer = (
  state: ReactTableContextStateInterface,
  action: ActionTypes
): ReactTableContextStateInterface => {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: action.payload.pageIndex,
      }
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: action.payload.pageSize,
      }
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        queryTotalCount: action.payload.totalCount,
      }
    case SORT_BY_CHANGED:
      return {
        ...state,
        querySortBy: action.payload.sortBy,
        sortByVal: convertSortBySingle(action.payload.sortBy),
      }
    case FILTERS_CHANGED:
      return {
        ...state,
        queryFilters: action.payload.filters,
        filtersVal: convertFilters(action.payload.filters),
      }
    default:
      return state
  }
}

interface SortCriteria {
  id: string
  desc: boolean
}

export interface ReactTableContextProviderProps {
  children: ReactNode
  context?: Context<ReactTableContextInterface>
  defaultSortBy?: SortCriteria[]
}

const ReactTableContextProvider: FC<ReactTableContextProviderProps> = ({
  children,
  context = ReactTableContext,
  defaultSortBy = [],
}) => {
  const [tableState, dispatchTableAction] = useReducer(tableReducer, {
    ...defaultState,
    querySortBy: defaultSortBy,
    sortByVal: convertSortBySingle(defaultSortBy),
  })

  const setQueryPageIndexHandler = (pageIndexValue: number) => {
    dispatchTableAction(PAGE_CHANGED_ACTION_CREATOR(pageIndexValue))
  }

  const setQueryPageSizeHandler = (pageSizeValue: number) => {
    dispatchTableAction(PAGE_SIZE_CHANGED_ACTION_CREATOR(pageSizeValue))
  }

  const setQueryTotalCountHandler = (totalCount: number) => {
    dispatchTableAction(TOTAL_COUNT_CHANGED_ACTION_CREATOR(totalCount))
  }

  const setQuerySortByHandler = (sortBy: any[]) => {
    dispatchTableAction(SORT_BY_CHANGED_ACTION_CREATOR(sortBy))
  }

  const setQueryFiltersHandler = (filters: any[]) => {
    dispatchTableAction(FILTERS_CHANGED_ACTION_CREATOR(filters))
  }

  const contextValue: ReactTableContextInterface = {
    tableState: tableState,
    setQueryPageIndex: setQueryPageIndexHandler,
    setQueryPageSize: setQueryPageSizeHandler,
    setTotalCount: setQueryTotalCountHandler,
    setSortBy: setQuerySortByHandler,
    setFilters: setQueryFiltersHandler,
  }

  return <context.Provider value={contextValue}>{children}</context.Provider>
}

export default ReactTableContextProvider
