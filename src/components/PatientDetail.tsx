import { useParams } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { useQueryFetchPatientAllergies, useQueryFetchPatientAppointments, useQueryFetchPatientDetail, useQueryFetchPatientDiagnoses, useQueryFetchPatientMedications } from "@/lib/api/patient-api"
import { Patient, PatientAllergy, PatientAppointment, PatientDiagnosis, PatientMedication } from "@/types/generic"
import { FC } from "react"

interface PatientCardProps {
  patient: Patient
}
const PatientCard: FC<PatientCardProps> = ({ patient }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Name:</h3>
            <p>{patient.name}</p>
          </div>
          <div>
            <h3 className="font-semibold">Age:</h3>
            <p>{patient.age} years</p>
          </div>
          <div>
            <h3 className="font-semibold">Gender:</h3>
            <p>{patient.gender}</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>{patient.email}</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>{patient.phone}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface PatientAllergiesProps {
  allergies: PatientAllergy[]
}
const PatientAllergies: FC<PatientAllergiesProps> = ({ allergies }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Allergies</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6">
          {allergies.map((allergy, index) => (
            <li key={index}>{allergy.allergy}</li>
          ))}
          {/* <li>Penicillin</li>
          <li>Peanuts</li>
          <li>Latex</li> */}
        </ul>
      </CardContent>
    </Card>
  )
}

interface PatientDiagnosesProps {
  diagnoses: PatientDiagnosis[]
}
const PatientDiagnoses: FC<PatientDiagnosesProps> = ({ diagnoses }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Recent Diagnoses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Diagnosis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {diagnoses.map((diagnosis, index) => (
              <TableRow key={index}>
                <TableCell>{diagnosis.date}</TableCell>
                <TableCell>{diagnosis.diagnosis}</TableCell>
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell>2024-03-15</TableCell>
              <TableCell>Hypertension</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-02-28</TableCell>
              <TableCell>Type 2 Diabetes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-01-10</TableCell>
              <TableCell>Seasonal Allergies</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

interface PatientMedicationsProps {
  medications: PatientMedication[]
}
const PatientMedications: FC<PatientMedicationsProps> = ({ medications }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Current Medication</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {
            medications.map((medication, index) => (
              <li key={index}>
                <span className="font-semibold">{medication.name}:</span> {medication.dosage} {medication.frequency}
              </li>
            ))
          }
          {/* <li>
            <span className="font-semibold">Lisinopril:</span> 10mg daily
          </li>
          <li>
            <span className="font-semibold">Metformin:</span> 500mg twice daily
          </li>
          <li>
            <span className="font-semibold">Cetirizine:</span> 10mg as needed
          </li> */}
        </ul>
      </CardContent>
    </Card>
  )
}

interface PatientAppointmentsProps {
  appointments: PatientAppointment[]
}
const PatientAppointments: FC<PatientAppointmentsProps> = ({ appointments }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Department</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.department}</TableCell>
                </TableRow>
              ))
            }
            {/* <TableRow>
              <TableCell>2024-04-05</TableCell>
              <TableCell>10:00 AM</TableCell>
              <TableCell>Dr. Smith</TableCell>
              <TableCell>Cardiology</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-04-20</TableCell>
              <TableCell>2:30 PM</TableCell>
              <TableCell>Dr. Johnson</TableCell>
              <TableCell>Endocrinology</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


const PatientDetail = () => {
  const { id } = useParams<{id: string}>()

  const { 
    isSuccess: isSuccessPatientDetail,
    data: dataPatientDetail
  } = useQueryFetchPatientDetail(id || '')
  const {
    isSuccess: isSuccessPatientDiagnoses,
    data: dataPatientDiagnoses
  } = useQueryFetchPatientDiagnoses(id || '')
  const {
    isSuccess: isSuccessPatientMedications,
    data: dataPatientMedications
  } = useQueryFetchPatientMedications(id || '')
  const {
    isSuccess: isSuccessPatientAllergies,
    data: dataPatientAllergies
  } = useQueryFetchPatientAllergies(id || '')
  const {
    isSuccess: isSuccessPatientAppointments,
    data: dataPatientAppointments
  } = useQueryFetchPatientAppointments(id || '')

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Patient overview */}
        {isSuccessPatientDetail && (
          <PatientCard patient={dataPatientDetail} />
        )}
        {/* Allergies */}
        {isSuccessPatientAllergies && (
          <PatientAllergies allergies={dataPatientAllergies} />
        )}
        {/* Recent Diagnoses */}
        {isSuccessPatientDiagnoses && (
          <PatientDiagnoses diagnoses={dataPatientDiagnoses} />
        )}
        {/* Current Medications */}
        {isSuccessPatientMedications && (
          <PatientMedications medications={dataPatientMedications} />
          )}
        {/* Upcoming Appointments */}
        {isSuccessPatientAppointments && (
          <PatientAppointments appointments={dataPatientAppointments} />
        )}
      </div>
    </div>
  )
}

export default PatientDetail
