import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import PatientDashboard from './components/PatientDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Patient Dashboard</h1>
      <PatientDashboard />
    </>
  )
}

export default App
