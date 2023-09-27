import { FC, ReactNode } from 'react'
import 'firebaseui/dist/firebaseui.css'
import { useAuth } from './useAuth.ts'

interface LoginProps {
  children?: ReactNode
}

export const Login: FC<LoginProps> = () => {
  useAuth()
  return (
    <>
      <h1 className='text-center my-3 title'>Login Page</h1>
      <div id='firebaseui-auth-container'></div>
      <div id='loader' className='text-center'>
        Loading form
      </div>
    </>
  )
}
