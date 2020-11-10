//helper function to connect the two context to work together

import {useContext} from  'react'
import {Context as TrackContext} from '../context/TrackContext'
import {Context as LocationContext} from  '../context/LocationContext'
import { Context as AuthContext } from "../context/AuthContext"


export default () => {

const { createTracks } = useContext(TrackContext)
const { state: { locations, name}} = useContext(LocationContext)



const saveTrack = () => {
    createTracks(name, locations)
}
 
return [saveTrack]
}