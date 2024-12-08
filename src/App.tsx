import './index.css'
import PatientDashboard from './components/PatientDashboard'
import MainLayout from './components/layout/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PatientContextProvider } from './providers/PatientContext'
import { BrowserRouter, Route, Routes } from 'react-router'
import PatientDetail from './components/PatientDetail'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Login from './components/Login'
import { AuthProvider } from './providers/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
            <PatientContextProvider>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<MainLayout><PatientDashboard /></MainLayout>} />
                    <Route path="/patient/:id" element={<MainLayout><PatientDetail /></MainLayout>} />
                  </Route>
                </Routes>
            </PatientContextProvider>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
