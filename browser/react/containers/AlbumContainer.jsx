import React from 'react';
import { connect } from 'react-redux';
import { start } from '../action-creators/player';
import SingleAlbum from '../components/SingleAlbum';

const mapStateToProps = ({ player, albums }) => ({
  album: albums.selected,
  currentSong: player.currentSong,
});

const mapDispatchToProps = (dispatch) => ({
  start: (song, list) => dispatch(start(song, list))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);