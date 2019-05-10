import React, { Component } from 'react';
import PropTypes from "prop-types";

import Information from './Information';
import Controls from './Controls';

import './headStyles.scss';

export default class Display extends Component {
  render() {
    return (
		<div className='display'>
		  <Information
		    gameTitle={ this.props.gameTitle }
		    trackNumber={ this.props.trackNumber } />
		  <Controls />
		</div>
    );
  }
}

Display.propTypes = {
	gameTitle: PropTypes.string,
	trackNumber: PropTypes.string
}