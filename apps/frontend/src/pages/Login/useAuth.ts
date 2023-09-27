import { useEffect } from 'react'
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/compat/app'
import { auth } from '../../firebase'

export const useAuth = () => {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        uiShown: function () {
          // This is what should happen when the form is full loaded. In this example, I hide the loader element.
          document.getElementById('loader')!.style.display = 'none'
        },
      },
      signInSuccessUrl: '/', // This is where should redirect if the sign in is successful.
      signInOptions: [
        // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        },
      ],
      tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
      privacyPolicyUrl: function () {
        // URL to your privacy policy
        window.location.assign('https://www.example.com/privacy-policy')
      },
    })
  }, [])
}
