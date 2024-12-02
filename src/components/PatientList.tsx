import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Patient } from "../types/generic"
import { useEffect, useReducer, useState } from "react"
import { Button } from "./ui/button"
import { DataTable } from "./DataTable"

const patientDataList: Patient[] = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    contact: {
      email: 'john@gmail.com',
      phone: '123-456-7890',
    },
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: ['Peanuts', 'Penicillin'],
    appointments: [
      { date: '2023-10-01', room: '101' },
      { date: '2023-10-05', room: '202' },
    ],
  },
  {
    name: 'Andi Smith',
    age: 35,
    gender: 'male',
    contact: {
      email: 'andi@gmail.com',
      phone: '123-456-7890',
    },
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: ['Peanuts', 'Penicillin'],
    appointments: [
      { date: '2023-10-01', room: '101' },
      { date: '2023-10-05', room: '202' },
    ],
  },
  {
    name: 'Nina Doe',
    age: 20,
    gender: 'female',
    contact: {
      email: 'nina@gmail.com',
      phone: '123-456-7890',
    },
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: ['Peanuts', 'Penicillin'],
    appointments: [
      { date: '2023-10-01', room: '101' },
      { date: '2023-10-05', room: '202' },
    ],
  },
]

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
    accessorKey: 'contact.email',
    header: 'Email',
  },
  {
    accessorKey: 'contact.phone',
    header: 'Phone',
  },
]

async function getData(): Promise<Patient[]> {
  return patientDataList
}

const columnHelper = createColumnHelper<Patient>()

const columns = [
  columnHelper.accessor(row => row.name, {
    id: 'name',
    cell: info => info.getValue(),
    header: 'Name',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.age, {
    id: 'age',
    cell: info => info.getValue(),
    header: 'Age',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.gender, {
    id: 'gender',
    cell: info => info.getValue(),
    header: 'Gender',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.contact.email, {
    id: 'email',
    cell: info => info.getValue(),
    header: 'Email',
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.contact.phone, {
    id: 'phone',
    cell: info => info.getValue(),
    header: 'Phone',
    footer: info => info.column.id,
  }),
  // columnHelper.group({
  //   header: 'Contact',
  //   footer: info => info.column.id,
  //   columns: [
  //   ]
  // }),
  
]

const PatientList = () => {
  const [listData, setListData] = useState<Patient[]>([])
  const rerender = useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data: listData,
    columns,
    getCoreRowModel: getCoreRowModel<Patient>(),
  })

  const gettingData = async () => {
    const data = await getData()
    setListData(data)
  }

  useEffect(() => {
    gettingData()
  }, [])

  return (
    <div className="p-2 text-justify">
      {/* <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
      <DataTable columns={patientColumns} data={patientDataList} />
      <div className="h-4">
        <Button onClick={() => rerender()} className="border p-2">
          Rerender
        </Button>
      </div>
    </div>
  )
}

export default PatientList
