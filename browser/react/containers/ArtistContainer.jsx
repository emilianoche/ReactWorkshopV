import React from 'react';
import { connect } from 'react-redux';
import { start } from '../action-creators/player';
import Artist from '../components/Artist';

const mapStateToProps = ({ artists, player }, { match }) => ({
  artist: artists.selected,
  currentSong: player.currentSong,
  path: match.path,
  url: match.url,
});

const mapDispatchToProps = (dispatch) => ({
  start: (song, list) => dispatch(start(song, list)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
