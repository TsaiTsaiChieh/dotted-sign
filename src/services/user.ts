import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import {auth} from '../firebase'

const errorHandle = (error: any) => {
  const errorCode = error.code
  const errorMessage = error.message
  console.error('firebase err: ', errorCode, errorMessage)
  return errorCode
}

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
    return Promise.resolve({
      uid: user.uid,
      email: user.email!,
      photo: null,
      name: null,
    })
  } catch (error: any) {
    return Promise.reject(errorHandle(error))
  }
}

export const googleLogin = async (): Promise<RegisterResType> => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  try {
    const result = await signInWithPopup(auth, provider)
    const {user} = result
    console.log(user)
    return Promise.resolve({
      uid: user.uid,
      name: user.displayName,
      email: user.email!,
      photo: user.photoURL,
    })
  } catch (error: any) {
    return Promise.reject(errorHandle(error))
  }
}
