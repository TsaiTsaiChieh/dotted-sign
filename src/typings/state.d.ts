interface uiState {
  modals: {
    shouldAuthVisible: boolean
    registerVisible: boolean
    loginVisible: boolean
    abandonVisible: boolean
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
  docIsPDF?: boolean
  signBase64?: string
}
