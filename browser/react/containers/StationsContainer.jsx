import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = (songs) => {
  return songs.reduce((memo, song) => {
    memo[song.genre] = memo[song.genre] || [];
    memo[song.genre].push(song);
    return memo;
  }, {});
}

const mapStateToProps = function (state) {
  return {
    stations: convertSongsToStations(state.songs)
  };
};

export default connect(mapStateToProps)(Stations);
