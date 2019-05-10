import React, { Component } from 'react';
import PropTypes from "prop-types";

import Visualization from './Visualization';
import Display from './Display';

import './headStyles.scss';

class Head extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<div className='head'>
			  <Visualization />
			  <Display 
			    gameTitle={ this.props.gameTitle }
			    trackNumber={ this.props.trackNumber }
			  />
			</div>
		);
	}
}

Head.propTypes = {
	gameTitle: PropTypes.string,
	trackNumber: PropTypes.string
}

export default Head;