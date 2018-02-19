import React from 'react';
import store from '../store';
import { connect } from 'react-redux'
import { start } from '../action-creators/player'
import SingleAlbum from '../components/SingleAlbum';

function mapStateToProps(state, ownProps) {
  return {
    album: state.albums.selected,
    currentSong: state.player.currentSong
  }
}

function mapDispatchToProps(dispatch) {
  return {
    start: function (song, list) { dispatch(start(song, list)) }
  }
}

const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(SingleAlbum)

export default AlbumContainer