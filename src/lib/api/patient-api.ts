import { Patient, PatientAllergy, PatientAppointment, PatientDiagnosis, PatientMedication } from "@/types/generic";
import { useMutation, useQuery } from "@tanstack/react-query";

const baseAPIUrl = "http://localhost:3001/";

const fetchPatients = async (): Promise<Array<Patient>> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch patients:', error);
    throw error; // Re-throw the error after logging it
  }
};

const fetchPatientDetail = async (id: string): Promise<Patient> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch patient detail for ID ${id}:`, error);
    throw error; // Re-throw the error after logging it
  }
};

const fetchPatientDiagnoses = async (id: string): Promise<Array<PatientDiagnosis>> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients/${id}/diagnoses`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch patient diagnoses for ID ${id}:`, error);
    throw error;
  }
};

const fetchPatientMedications = async (id: string): Promise<Array<PatientMedication>> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients/${id}/medications`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch patient medications for ID ${id}:`, error);
    throw error;
  }
};

const fetchPatientAllergies = async (id: string): Promise<Array<PatientAllergy>> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients/${id}/allergies`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch patient allergies for ID ${id}:`, error);
    throw error;
  }
};

const fetchPatientAppointments = async (id: string): Promise<Array<PatientAppointment>> => {
  try {
    const response = await fetch(`${baseAPIUrl}patients/${id}/appointments`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch patient appointments for ID ${id}:`, error);
    throw error;
  }
};

export const useQueryFetchPatients = () => {
  return useQuery<Array<Patient>>({
    queryKey: ['patients'],
    queryFn: fetchPatients,
  })
}

export const useQueryFetchPatientDetail = (id: string) => {
  return useQuery<Patient>({
    queryKey: ['patients', id],
    queryFn: () => fetchPatientDetail(id),
  })
}

export const useMutationFetchPatientDetail = (id: string) => {
  return useMutation<Patient, Error>({
    mutationFn: () => fetchPatientDetail(id),
  })
}

export const useQueryFetchPatientDiagnoses = (id: string) => {
  return useQuery<Array<PatientDiagnosis>>({
    queryKey: ['patients', id, 'diagnoses'],
    queryFn: () => fetchPatientDiagnoses(id),
  })
}

export const useMutationFetchPatientDiagnoses = (id: string) => {
  return useMutation<Array<PatientDiagnosis>, Error>({
    mutationFn: () => fetchPatientDiagnoses(id),
  })
}

export const useQueryFetchPatientMedications = (id: string) => {
  return useQuery<Array<PatientMedication>>({
    queryKey: ['patients', id, 'medications'],
    queryFn: () => fetchPatientMedications(id),
  })
}

export const useMutationFetchPatientMedications = (id: string) => {
  return useMutation<Array<PatientMedication>, Error>({
    mutationFn: () => fetchPatientMedications(id),
  })
}

export const useQueryFetchPatientAllergies = (id: string) => {
  return useQuery<Array<PatientAllergy>>({
    queryKey: ['patients', id, 'allergies'],
    queryFn: () => fetchPatientAllergies(id),
  })
}

export const useMutationFetchPatientAllergies = (id: string) => {
  return useMutation<Array<PatientAllergy>, Error>({
    mutationFn: () => fetchPatientAllergies(id),
  })
}

export const useQueryFetchPatientAppointments = (id: string) => {
  return useQuery<Array<PatientAppointment>>({
    queryKey: ['patients', id, 'appointments'],
    queryFn: () => fetchPatientAppointments(id),
  })
}

export const useMutationFetchPatientAppointments = (id: string) => {
  return useMutation<Array<PatientAppointment>, Error>({
    mutationFn: () => fetchPatientAppointments(id),
  })
}
