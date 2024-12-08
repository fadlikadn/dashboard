import { useAuth } from '@/lib/useAuth'
import { FC } from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute: FC = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
