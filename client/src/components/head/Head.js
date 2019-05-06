import React, { Component } from 'react';

import Visualization from './Visualization';
import Display from './Display';

class Head extends Component {
	state = {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div className='head'>
				<Visualization />
				<Display />
			</div>
		);
	}
}

export default Head;