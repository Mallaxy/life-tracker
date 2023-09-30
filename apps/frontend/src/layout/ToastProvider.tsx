import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProviderProps extends PropsWithChildren {}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
