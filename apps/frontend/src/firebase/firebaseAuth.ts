import { getAuth } from 'firebase/auth'
import { firebaseApp } from './firebaseApp.ts'

export const auth = getAuth(firebaseApp)
