import React from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';
import { start } from '../action-creators/player'

function mapStateToProps(state, ownProps) {
    return {
        genreName: ownProps.match.params.genreName,
        songs: state.songs
            .filter(song => song.genre === ownProps.match.params.genreName),
        currentSong: state.player.currentSong,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        start: function (song, list) { dispatch(start(song, list)) }
    }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station)

export default StationContainer