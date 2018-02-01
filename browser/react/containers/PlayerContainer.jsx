import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { play, pause, next, previous } from '../action-creators/player';

const mapStateToProps = ({ player }) => ({ ...player });

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
