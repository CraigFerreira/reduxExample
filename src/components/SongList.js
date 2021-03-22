import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'
import SongDetail from './songDetail'

class SongList extends Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <div>Song List</div>
                    <div>
                    {this.props.songs.map((song)=>{
                        return (<div key={song.title}>
                            {song.title} {song.duration}
                            <button onClick={()=>{this.props.selectSong(song)}}>Select</button>
                            </div>)
                    })}
                    </div>
                    <div>
                        <SongDetail/>
                    </div>

            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        songs: state.songs
    }
}


export default connect(mapStateToProps, {selectSong})(SongList)