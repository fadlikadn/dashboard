import { Filters, SortingRule } from 'react-table'

export const convertFilters = (filterArr: Filters<object>): string => {
  let filterString = ''
  filterArr.map((filterObj) => {
    if (filterString !== '') {
      filterString += '~and~'
    }
    filterString += `${filterObj.id}~${filterObj.value}`
  })
  return filterString
}

export const convertSortBySingle = (sortArr: SortingRule<object>[]): string => {
  const sortByString =
    sortArr.length > 0
      ? `${sortArr[0].id}~${sortArr[0].desc ? 'desc' : 'asc'}`
      : ''
  return sortByString
}
