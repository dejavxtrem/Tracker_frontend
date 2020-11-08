import '../_mockLocation'
import React, { useEffect, useState, useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import  { SafeAreaView, NavigationEvents , withNavigationFocus} from 'react-navigation'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import {  Context  as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({isFocused }) => {

const  { addLocation } = useContext(LocationContext)


    const [err] = useLocation(isFocused, (location) => {
        addLocation(location)
    })

   console.log(isFocused)


    return (
        <SafeAreaView forceInset={{top:'always'}}>
         <Text h2 >
            Create a Track
        </Text>
        <Map/>
        {/* <NavigationEvents onWillBlur ={ () =>  console.log('Leaving')}/> */}
        {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
  
    )
}


const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)