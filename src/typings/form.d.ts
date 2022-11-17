type RegisterFormType = {
  email: string
  password: string
  cPassword: string
}
type LoginFormType = Omit<RegisterForm, 'cPassword'>
type UploadDocFormType = {
  file: File
}
