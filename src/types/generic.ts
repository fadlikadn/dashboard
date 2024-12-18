export interface PatientDiagnosis {
  id?: string
  date: string
  diagnosis: string
  patient?: string
}

export interface PatientMedication {
  id?: string
  name: string
  dosage: string
  frequency: string
  patient?: string
}

export interface PatientAppointment {
  id?: string
  date: string
  time: string
  doctor: string
  department: string
  patient?: string
}

export interface PatientAllergy {
  id?: string
  allergy: string
  patient?: string
}

export interface PatientContact {
  phone?: string
  email: string
}

export interface Patient {
  id?: string
  name: string
  age: number
  gender: string
  phone?: string
  email: string
  diagnoses?: PatientDiagnosis[]
  medications?: PatientMedication[]
  allergies?: PatientAllergy[]
  appointments: PatientAppointment[]
}

export interface LoginResponse {
  token: string
}

export interface PatientResponse<T> {
  data: Array<T>
  total: number
  page: number
  lastPage: number
}