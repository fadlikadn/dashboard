import { ColumnDef } from "@tanstack/react-table"
import { Patient } from "../types/generic"
import { FC } from "react"
import { Button } from "./ui/button"
import { DataTable } from "./DataTable"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { NavLink } from "react-router"

const patientColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Detail</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NavLink to={`/patient/${data?.id}`}>
                View Patient Detail
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

interface PatientListProps {
  patientList: Patient[]
}

const PatientList: FC<PatientListProps> = ({ patientList = [] }) => {
  return (
    <div className="text-justify bg-white min-w-full">
      <DataTable columns={patientColumns} data={patientList} filterColumn="email" />
    </div>
  )
}

export default PatientList
