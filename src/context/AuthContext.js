import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {

    switch(action.type) {
        case 'add_error':
         return {...state,  errorMessage: action.payload}
        case 'signup':
         return { errorMessage: '', token: action.payload}
        case 'signin':
         return {...state, token: action.payload}
        case 'clear_error_message':
        return {...state, errorMessage: ''}
        case 'signout':
         return {token: null, errorMessage: ''}
        default:
        return state
    }
}


const signUp = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', { email, password})
           await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token})
            navigate('TrackList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign-up'})
        }
    }
}

const signIn = (dispatch) => {
    return  async ({ email, password}) => {
        try {
            const response = await  trackerApi.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch ({type: 'signin', payload: response.data.token})
            navigate('TrackList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign-in'})
        }
    }
}


const clearErrorMessage = dispatch => () =>  {
     dispatch({type: 'clear_error_message'})
}

//function to put the token back into localstorage incase the close the app and open back up
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin',  payload: token});
        navigate('TrackList')
    } else {
        navigate('Signup')
    }
}


// to sign out or logout user
const signOut = dispatch =>  async () => {
      await AsyncStorage.removeItem('token')
      dispatch({ type: 'signout'})
      navigate('loginFlow')
}








export const { Provider, Context } = createDataContext (
        authReducer, //takes in the reducer name
        {signIn, signOut, signUp, clearErrorMessage, tryLocalSignin, signOut},// the reducer actions
        {token: null, errorMessage: '',} // iniitial
)