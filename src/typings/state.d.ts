interface uiState {
  modals: {
    shouldAuthVisible: boolean
    registerVisible: boolean
  }
}
interface authState {
  isAuth: boolean
  nativeRegisterIsPass: boolean
  userData?: UserDataType
}
