import React, { useContext, useEffect} from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import  AuthForm from '../components/AuthForm'
import  NavLink from '../components/NavLink'
import { NavigationEvents  } from "react-navigation";

const SignupScreen = ({navigation}) => {
    const { state, signUp , clearErrorMessage, tryLocalSignin} = useContext(AuthContext)

    return (
        <View  style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
       <AuthForm
       headerText="Sign Up for Tracker"
       errorMessage = { state.errorMessage}
       submitButtonText = "Sign Up"
       onSubmit={({ email , password}) => signUp({ email, password})}
       />
        <NavLink
        routeName= "Signin"
        text="Already have an account? Sign in instead"
        />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
    
})

export default SignupScreen