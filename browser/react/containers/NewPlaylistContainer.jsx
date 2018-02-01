import React from 'react';
import { connect } from 'react-redux';
import NewPlaylist from '../components/NewPlaylist';
import { createPlaylist } from '../action-creators/playlists';

class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invalidLength: true,
      hasChanged: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      value: value,
      invalidLength: value.length < 1 || value.length > 16,
      hasChanged: true,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.addPlaylist(this.state.value)
    this.setState({
      value: '',
    });
  }

  addPlaylist(name) {
    this.props.createPlaylist(name)
      .then((id) => this.props.history.push(`/playlists/${id}`))
  }


  render() {
    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state.value}
        invalidLength={this.state.invalidLength}
        hasChanged={this.state.hasChanged}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPlaylist: name => dispatch(createPlaylist(name)), 
})

export default connect(null, mapDispatchToProps)(NewPlaylistContainer);