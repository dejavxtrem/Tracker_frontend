//helper function to connect the two context to work together

import {useContext} from  'react'
import {Context as TrackContext} from '../context/TrackContext'
import {Context as LocationContext} from  '../context/LocationContext'
import { Context as AuthContext } from "../context/AuthContext"
import { navigate } from '../navigationRef'


export default () => {

const { createTracks } = useContext(TrackContext)
const { state: { locations, name}, resetValue} = useContext(LocationContext)



const saveTrack =  async () => {
    await createTracks(name, locations)
    resetValue()
    navigate('TrackList')

}
 
return [saveTrack]
}