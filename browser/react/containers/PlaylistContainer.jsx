import React from 'react';
import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { fetchPlaylist, addSong } from '../action-creators/playlists';
import { start } from  '../action-creators/player';
import { fetchSongs } from '../action-creators/songs';

const mapStateToProps = ({ songs, player, playlists }) => ({
  playlist: playlists.selected,
  currentSong: player.currentSong,
  songs,
});

const mapDispatchToProps = (dispatch) => ({
  addSong: (song) => dispatch(addSong(song)),
  start: (song, list) => dispatch(start(song, list)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)