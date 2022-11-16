interface uiState {
  modals: {
    shouldAuthVisible: boolean
    registerVisible: boolean
    loginVisible: boolean
  }
  loadingVisible: boolean
}
interface authState {
  isAuth: boolean
  nativeRegisterIsPass: boolean
  userData?: UserDataType
}
