import axios from 'axios'
export const REGISTER_UP = "REGISTER_UP"
export const SIGN_IN = "SIGN_IN"
export const Signinberhasil = (user) =>{
    return {
        type: SIGN_IN,
        user,
    }
}
// export const Signupberhasil = (user) =>{
//     return {
//         type: REGISTER_UP,
//         user,
//     }
// }
// export const Signup =(user)=>{
// return async (dispatch) =>{
//     const response = await axios.post('https://634e3b4bf34e1ed82686101c.mockapi.io/USER_ACCOUNT',user)
//     dispatch(Signupberhasil( response.data))
// }
// }

export const Signin = (user) => {
return async (dispatch ) =>{
    const response = await axios.get ('https://634e3b4bf34e1ed82686101c.mockapi.io/USER_ACCOUNT',user)
    dispatch(Signinberhasil( response.data))
}
}
 
