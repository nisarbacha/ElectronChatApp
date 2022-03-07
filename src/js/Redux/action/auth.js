import * as api from '../api/auth'

// User Registeration Api
export const registerUser = formData => dispatch => {
  dispatch({ type: 'AUTH_REGISTER_INIT' });
  return api.register(formData)
    .then(_ => dispatch({ type: 'AUTH_REGISTER_SUCCESS', user: {} }))
    .catch(error => dispatch({ type: 'AUTH_REGISTER_ERROR', error }))
}
// User Login Api
export const loginUser = formData => dispatch => {
  dispatch({ type: "AUTH_LOGIN_INIT" });
  api.login(formData)
    .then(_ => dispatch({ type: "AUTH_LOGIN_SUCCESS", user: {} }))
    .catch(error => {
      dispatch({ type: 'AUTH_LOGIN_ERROR', error })
    })
}
// User Logout Api
export const logout = () => dispatch =>
  api
    .logout()
    .then(_ => dispatch({ type: 'AUTH_LOGOUT_SUCCESS' }))

// User Registration and redirect to homePage Api
export const listerToAuthChanges = () => dispatch => {
  dispatch({ type: "AUTH_ON_INIT" })
  api
    .onAuthStateChanges(async authUser => {
      if (authUser) {
        const userProfile = await api.getUserProfile(authUser.uid);
        dispatch({ type: "AUTH_ON_SUCCESS", user: userProfile })
      } else {
        dispatch({ type: "AUTH_ON_ERROR" })
      }
    })
}
