import React from 'react';
import Sidebar from '../components/Sidebar';
import { fetchPlaylists } from '../action-creators/playlists';
import { connect } from 'react-redux';

const mapStateToProps = ({ playlists }) => ({
  playlists: playlists.list,
});

export default connect(mapStateToProps)(Sidebar);