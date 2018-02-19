import { connect } from 'react-redux'
import Stations from '../components/Stations'



const convertSongsToStations = function (songsArray) {
    // escribeme!
    const stations = {};
    songsArray.forEach(song => {
        const genre = song.genre;
        stations[genre] = stations[genre] || [];
        stations[genre].push(song);
    });
    return stations;
};

function mapStateToProps(state) {
    return {
        stations: convertSongsToStations(state.songs)
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)

export default StationsContainer
