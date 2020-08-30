import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, actions) => {

    switch(actions.type) {
        default:
            return state
    }
}


const signUp = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data)

        }catch (err) {
            console.log(err.response.data)
        }
    }
}

const signIn = (dispatch) => {
    return ({ email, password}) => {

    }
}


const signOut = (dispatch) => {
    return () => {

    }
}








export const { Provider, Context } = createDataContext (
        authReducer,
        {signIn, signOut, signUp},
        {isSignedIn: false}
)