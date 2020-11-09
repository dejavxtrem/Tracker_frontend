import '../_mockLocation'
import React, { useEffect, useState, useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import  { SafeAreaView, NavigationEvents , withNavigationFocus} from 'react-navigation'
import {  Context  as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({isFocused }) => {

const  { state, addLocation } = useContext(LocationContext)


    const [err] = useLocation(isFocused, (location) => {
        addLocation(state.recording, location)
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
        <TrackForm/>
        </SafeAreaView>
  
    )
}


const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)