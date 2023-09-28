import { getFirestore } from 'firebase/firestore/lite'
import { firebaseApp } from './firebaseApp.ts'

export const db = getFirestore(firebaseApp)
