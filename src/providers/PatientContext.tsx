import { Patient } from "@/types/generic"
import { createContext, FC, ReactNode, useState } from "react"

export interface PatientContextStateInterface {
  selectedPatientId: string
  selectedPatient: Patient | null
  isPatientDialogOpen: boolean
  loadingStart: boolean
  socket: WebSocket | null
}

export interface PatientContextInterface {
  state: PatientContextStateInterface
  setSelectedPatientId: (id: string) => void
  setSelectedPatient: (patient: Patient) => void
  setPatientDialogOpen: (isOpen: boolean) => void
  setLoadingStart: (loading: boolean) => void
  setSocket: (socket: WebSocket) => void
}

const defaultValue: PatientContextInterface = {
  state: {
    selectedPatientId: '',
    selectedPatient: null,
    isPatientDialogOpen: false,
    loadingStart: false,
    socket: null,
  },
  setSelectedPatientId: () => {},
  setSelectedPatient: () => {},
  setPatientDialogOpen: () => {},
  setLoadingStart: () => {},
  setSocket: () => {},
}

const PatientContext = createContext<PatientContextInterface>(defaultValue)

export interface PatientProviderProps {
  children: ReactNode
}

export const PatientContextProvider: FC<PatientProviderProps> = ({ children }) => {
  const [selectedPatientId, setSelectedPatientId] = useState<string>('')
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isPatientDialogOpen, setPatientDialogOpen] = useState<boolean>(false)
  const [loadingStart, setLoadingStart] = useState<boolean>(false)
  const [socket, setSocket] = useState<WebSocket | null>(null)

  const contextValue: PatientContextInterface = {
    state: {
      selectedPatientId,
      selectedPatient,
      isPatientDialogOpen,
      loadingStart,
      socket,
    },
    setSelectedPatientId,
    setSelectedPatient,
    setPatientDialogOpen,
    setLoadingStart,
    setSocket
  }

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  )
}

export default PatientContext
