import React from 'react';
import { connect } from 'react-redux'; 
import Albums from '../components/Albums';

const mapStateToProps = ({ albums }) => ({
  albums: albums.list,
})

export default connect(mapStateToProps)(Albums);