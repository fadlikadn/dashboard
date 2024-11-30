export interface PatientDiagnosis {
  date: string
  diagnosis: string
}

export interface PatientMedication {
  name: string
  dosage: string
  frequency: string
}

export interface PatientAppointment {
  date: string
  room: string
}

export interface PatientContact {
  phone?: string
  email: string
}

export interface Patient {
  name: string
  age: number
  gender: string
  contact: PatientContact
  diagnoses: PatientDiagnosis[]
  medications: PatientMedication[]
  allergies: string[]
  appointments: PatientAppointment[]
}