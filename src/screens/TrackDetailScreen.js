import React , { useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {Context as TrackContext } from '../context/TrackContext'
import MapView, {Polyline} from 'react-native-maps'

const TrackDetailScreen = ({navigation}) => {

    const { state } = useContext(TrackContext)

    const _id = navigation.getParam('_id')

    //helper function to find the right trackdetails
    const track = state.find(nameTrack => nameTrack._id === _id) //to compare the touchable track with the one from the state from context

    const initialCoords = track.locations[0].coords

    return (
        <>
        <Text style={{fontSize: 48 }}>
            {track.name}
        </Text>
        <MapView
         initialRegion={{
             longitudeDelta: 0.01,
             latitudeDelta: 0.01,
             ...initialCoords
         }}
         style={styles.map}
        >
            <Polyline
            coordinates={track.locations.map(loc => loc.coords)} 
            />
        </MapView>
        </>
    )
}


const styles = StyleSheet.create({
 map: {
     height:300
 }
})

export default TrackDetailScreen