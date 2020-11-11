import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
  
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs' 

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import {Provider as AuthProvider} from './src/context/AuthContext' // rename Provider as AuthProvider
import {Provider as LocationProvider } from './src/context/LocationContext' ///rename  provider as locationProvider
import {Provider as TrackProvider } from './src/context/TrackContext' // rename Provider as Trackprovider
import { setNavigator } from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { FontAwesome } from '@expo/vector-icons';


const trackListFLow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

trackListFLow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} color="black" />
}

const SwitchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator ({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),

    mainFlow: createBottomTabNavigator({
        trackListFlow: trackListFLow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    })


})

const App =  createAppContainer(SwitchNavigator)

export default () => {

   //Every new context provider is added as a higher order component on app.js
    return (
     <TrackProvider>
        <LocationProvider> 
            <AuthProvider>
            <App ref={(navigator) => { setNavigator(navigator)}}/>
            </AuthProvider>
        </LocationProvider>
     </TrackProvider>


    )
}


