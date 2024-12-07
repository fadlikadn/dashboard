import { Patient } from "@/types/generic";

export const patientDataList: Patient[] = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    email: 'john@gmail.com',
    phone: '123-456-7890',
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: [
      {
        allergy: 'Peanuts',
      },
      {
        allergy: 'Penicillin',
      }
    ],
    appointments: [
      { date: '2023-10-01', time: '10.00', doctor: 'Dr. Smith', department: '101' },
      { date: '2023-10-05', time: '10.00', doctor: 'Dr. John', department: '202' },
    ],
  },
  {
    name: 'Andi Smith',
    age: 35,
    gender: 'male',
    email: 'andi@gmail.com',
    phone: '123-456-7890',
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: [
      {
        allergy: 'Peanuts',
      },
      {
        allergy: 'Penicillin',
      }
    ],
    appointments: [
      { date: '2023-10-01', time: '10.00', doctor: 'Dr. Smith', department: '101' },
      { date: '2023-10-05', time: '10.00', doctor: 'Dr. John', department: '202' },
    ],
  },
  {
    name: 'Nina Doe',
    age: 20,
    gender: 'female',
    email: 'nina@gmail.com',
    phone: '123-456-7890',
    diagnoses: [
      { date: '2023-09-20', diagnosis: 'Flu' },
      { date: '2023-08-15', diagnosis: 'Hypertension' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '100mg', frequency: 'Once a day' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice a day' },
    ],
    allergies: [
      {
        allergy: 'Peanuts',
      },
      {
        allergy: 'Penicillin',
      }
    ],
    appointments: [
      { date: '2023-10-01', time: '10.00', doctor: 'Dr. Smith', department: '101' },
      { date: '2023-10-05', time: '10.00', doctor: 'Dr. John', department: '202' },
    ],
  },
]