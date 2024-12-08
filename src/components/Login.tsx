import { useMutationLogin } from "@/lib/api/patient-api"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { useAuth } from "@/lib/useAuth"

interface LoginForm {
  username: string
  password: string
}

const Login = () => {
  const mutationLogin = useMutationLogin()
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors }} = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await mutationLogin.mutateAsync(data)
      console.log('Login response:', response)
      // sessionStorage.setItem('token', response.token)
      login(response.token)
      navigate('/')
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="spac-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                placeholder="username" 
                required 
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password" 
                id="password" 
                placeholder="********" 
                required 
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
