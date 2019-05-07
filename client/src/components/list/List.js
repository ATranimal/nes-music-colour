import React, { Component } from 'react';
import SongInformation from './SongInformation';

class List extends Component {
	state = {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div className='list'>
				<SongInformation />
				<SongInformation />
				<SongInformation />
				<SongInformation />
				<SongInformation />
			</div>
		);
	}
}

export default List;