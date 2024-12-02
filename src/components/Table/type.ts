import { CSSProperties } from 'react'
import { Column } from 'react-table'

export type CustomTableColumnType = Column<object> & {
  className?: string // inject tailwind classes
  flexStyle?: string // override default flex layout
  customStyle?: CSSProperties // add custom style using pure CSS
  isDisableResizing?: boolean // to disable resizing column feature, usually for expand/collapse col
}
