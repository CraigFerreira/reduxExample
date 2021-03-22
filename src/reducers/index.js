import {combineReducers} from 'redux'

const songsReducer =()=>{
    return [
        {title: 'Macarena', duration: '5 mins'},
        {title: 'Hero', duration: '4 mins'},
        {title: 'Diamonds are forever', duration: '6 mins'},
    ]
}

const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
})