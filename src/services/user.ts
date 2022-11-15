import {createUserWithEmailAndPassword} from 'firebase/auth'

import {auth} from '../firebase'

export const nativeRegister = async (
  data: RegisterForm,
): Promise<RegisterResType> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    )
    const {user} = userCredential
    return Promise.resolve({uid: user.uid, email: user.email!})
  } catch (error: any) {
    const errorCode = error.code
    const errorMessage = error.message
    console.error('firebase err: ', errorCode, errorMessage)
    return Promise.reject(errorCode)
  }
}
