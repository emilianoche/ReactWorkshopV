import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { play, pause, next, previous } from '../action-creators/player';

export default class PlayerContainer extends React.Component {
  constructor() {
    super();
    this.state = store.getState().player; 
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().player);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  play() {
    store.dispatch(play());
  }

  pause() {
    store.dispatch(pause());
  }

  next() {
    store.dispatch(next());
  }

  previous() {
    store.dispatch(previous());
  }

  render() {
    return (
      <Player 
        currentSong={this.state.currentSong}
        isPlaying={this.state.isPlaying} 
        play={this.play} 
        pause={this.pause}
        next={this.next}
        previous={this.previous}
        progress={this.state.progress}
      />
    );
  }
}

const mapStateToProps = ({ player }) => ({ ...player });

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: () => dispatch(next()),
  previous: () => dispatch(previous()),
});

connect(mapStateToProps, mapDispatchToProps)(Player);