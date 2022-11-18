interface uiState {
  modals: {
    shouldAuthVisible: boolean
    registerVisible: boolean
    loginVisible: boolean
  }
  loadingVisible: boolean
  stepId: string
}
interface authState {
  isAuth: boolean
  nativeRegisterIsPass: boolean
  userData?: UserDataType
}
interface persistState {
  docBase64?: string
  signBase64?: string
}
