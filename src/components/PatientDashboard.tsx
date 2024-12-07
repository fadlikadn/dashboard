import PatientList from "./PatientList";
import {useQueryFetchPatients } from "@/lib/api/patient-api"

const PatientDashboard = () => {
  const { data, isSuccess, isLoading } = useQueryFetchPatients()

  return (
    <div className="">
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <PatientList patientList={data} />
      )}
    </div>
  )
}

export default PatientDashboard
