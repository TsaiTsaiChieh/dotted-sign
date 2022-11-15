type RegisterForm = {
  email: string
  password: string
  cPassword: string
}
type LoginForm = Omit<RegisterForm, 'cPassword'>
