import './index.css'
import PatientDashboard from './components/PatientDashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout>
             <Routes>
              <Route index element={<PatientDashboard />} />
              <Route path="about" element={<h1>About</h1>} />
            </Routes>
          </MainLayout>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
