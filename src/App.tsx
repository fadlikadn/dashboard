import './index.css'
import PatientDashboard from './components/PatientDashboard'
import MainLayout from './components/layout/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PatientContextProvider } from './providers/PatientContext'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <PatientContextProvider>
          <PatientDashboard />
        </PatientContextProvider>
      </MainLayout>
    </QueryClientProvider>
  )
}

export default App
