import './index.css'
import PatientDashboard from './components/PatientDashboard'
import MainLayout from './components/layout/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PatientContextProvider } from './providers/PatientContext'
import { BrowserRouter, Route, Routes } from 'react-router'
import PatientDetail from './components/PatientDetail'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout>
          <PatientContextProvider>
              <Routes>
                <Route path="/" element={<PatientDashboard />} />
                <Route path="/patient/:id" element={<PatientDetail />} />
              </Routes>
            {/* <PatientDashboard /> */}
          </PatientContextProvider>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
