import { useState } from "react";
import PatientList from "./PatientList";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('appointments')
  const [appointments, setAppointments] = useState([])

  return (
    <div className="container p-4">
      <PatientList />
    </div>
  )
}

export default PatientDashboard
