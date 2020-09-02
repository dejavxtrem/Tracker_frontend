import React , { useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import  AuthForm from '../components/AuthForm'
import  NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents  } from "react-navigation";

const SigninScreen = () => {

    const { state, signIn, clearErrorMessage } = useContext(AuthContext)
    return (
        <View style={ styles.container}>
            <NavigationEvents
                // onWillFocus={() => {}} // wehn about to transition to the screen
                // onDidFocus={() => {}} // when already transiton to the screen
                // onWillBlur={() => {}}  // when about to navigate away from the screen
                // onDidBlur={() => {}} // when the transition completes to the formal screen
                onWillFocus={clearErrorMessage}

            />
            <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={ state.errorMessage}
            onSubmit={({email, password}) => signIn({email, password}) }
            submitButtonText="Sign In"
            />
            <NavLink 
            text ="Dont have an account? Sign up instead"
            routeName="Signup"   
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen