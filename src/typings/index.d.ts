type UserDataType = {
  uid: string
  name: string | null
  email: string
  photo: string | null
}

type NavigationType = {
  id: string
  name: string
  path: string
  childElement: React.ReactNode
}
