import axios from 'axios'
export const REGISTER_UP = "REGISTER_UP"
export const SIGN_IN = "SIGN_IN"
export const Signinberhasil = (user) =>{
    return {
        type: SIGN_IN,
        user,
    }
}

export const Signin = (user) => {
return async (dispatch ) =>{
    const response = await axios.get ('https://0fe5-110-232-81-154.ap.ngrok.io/api/auth/login',user)
    dispatch(Signinberhasil( response.data))
}
}
 
