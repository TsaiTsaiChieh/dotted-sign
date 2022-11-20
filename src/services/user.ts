import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from 'firebase/auth'

import {auth} from '../firebase'

const errorHandle = (error: any) => {
  const errorCode = error.code
  const errorMessage = error.message
  console.error('firebase err: ', errorCode, errorMessage)
  return errorCode
}

export const nativeRegister = async (
  data: RegisterFormType,
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
export const nativeLogin = async (
  data: LoginFormType,
): Promise<UserDataType> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
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
  } catch (error) {
    return Promise.reject(errorHandle(error))
  }
}
export const googleLogin = async (): Promise<RegisterResType> => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  try {
    const result = await signInWithPopup(auth, provider)
    const {user} = result
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
export const fbLogin = async (): Promise<UserDataType> => {
  const provider = new FacebookAuthProvider()
  const auth = getAuth()
  try {
    const result = await signInWithPopup(auth, provider)
    const {user} = result
    // TODO get photo and name from FB by access token
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
