import { useContext, useEffect } from "react";
import PatientList from "./PatientList";
import { useMutationFetchPatientAllergies, useMutationFetchPatientAppointments, useMutationFetchPatientDetail, useMutationFetchPatientDiagnoses, useMutationFetchPatientMedications, useQueryFetchPatients } from "@/lib/api/patient-api";
import PatientContext from "@/providers/PatientContext";
import { Patient } from "@/types/generic";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";

const PatientDashboard = () => {
  const { 
    state: { selectedPatientId, isPatientDialogOpen, selectedPatient, loadingStart }, 
    setSelectedPatient, 
    setPatientDialogOpen,
    setLoadingStart,
  } = useContext(PatientContext)

  const { data, isSuccess, isLoading } = useQueryFetchPatients()
  const mutationFetchPatientDetail = useMutationFetchPatientDetail(selectedPatientId)
  const mutationFetchPatientDiagnoses = useMutationFetchPatientDiagnoses(selectedPatientId)
  const mutationFetchPatientMedications = useMutationFetchPatientMedications(selectedPatientId)
  const mutationFetchPatientAllergies = useMutationFetchPatientAllergies(selectedPatientId)
  const mutationFetchPatientAppointments = useMutationFetchPatientAppointments(selectedPatientId)

  const fetchPatientDetail = async () => {
    const patientDetail = await mutationFetchPatientDetail.mutateAsync()
    const diagnoses = await mutationFetchPatientDiagnoses.mutateAsync()
    const medications = await mutationFetchPatientMedications.mutateAsync()
    const allergies = await mutationFetchPatientAllergies.mutateAsync()
    const appointments = await mutationFetchPatientAppointments.mutateAsync()
    const patient: Patient = {
      ...patientDetail,
      diagnoses,
      medications,
      allergies,
      appointments,
    }
    console.log(patient)
    setSelectedPatient(patient)
    setLoadingStart(false)
  }

  useEffect(() => {
    if (selectedPatient) {
      setPatientDialogOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPatient])

  useEffect(() => {
    if (selectedPatientId !== '' && loadingStart) {
      console.log(selectedPatientId)
      fetchPatientDetail()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingStart])

  return (
    <div className="">
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <PatientList patientList={data} />
      )}
      <Sheet onOpenChange={setPatientDialogOpen} open={isPatientDialogOpen} modal>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Detail Patient</SheetTitle>
            <SheetDescription>
              <div className="space-y-4">
                <div className="text-lg font-semibold">Personal Information</div>
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Name:</strong> {selectedPatient?.name}</div>
                  <div><strong>Age:</strong> {selectedPatient?.age}</div>
                  <div><strong>Gender:</strong> {selectedPatient?.gender}</div>
                  <div><strong>Phone:</strong> {selectedPatient?.phone}</div>
                  <div><strong>Email:</strong> {selectedPatient?.email}</div>
                </div>
                {selectedPatient?.diagnoses && selectedPatient?.diagnoses.length > 0 && (
                  <>
                    <div className="text-lg font-semibold">Diagnoses</div>
                    <ul className="list-disc pl-5">
                      {selectedPatient?.diagnoses.map((d, index) => (
                        <li key={index}>{`${d.date}: ${d.diagnosis}`}</li>
                      ))}
                    </ul>
                  </>
                )}
                {selectedPatient?.medications && selectedPatient?.medications.length > 0 && (
                  <>
                    <div className="text-lg font-semibold">Medications</div>
                    <ul className="list-disc pl-5">
                      {selectedPatient?.medications.map((m, index) => (
                        <li key={index}>{`${m.name}, ${m.dosage}, ${m.frequency}`}</li>
                      ))}
                    </ul>
                  </>
                )}
                {selectedPatient?.allergies && selectedPatient?.allergies.length > 0 && (
                  <>
                    <div className="text-lg font-semibold">Allergies</div>
                    <ul className="list-disc pl-5">
                      {selectedPatient?.allergies.map((a, index) => (
                        <li key={index}>{a.allergy}</li>
                      ))}
                    </ul>
                  </>
                )}
                {selectedPatient?.appointments && selectedPatient?.appointments.length > 0 && (
                  <>
                    <div className="text-lg font-semibold">Appointments</div>
                    <ul className="list-disc pl-5">
                      {selectedPatient?.appointments.map((a, index) => (
                        <li key={index}>{`${a.date}, Room: ${a.room}`}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default PatientDashboard
