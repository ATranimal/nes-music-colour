import React, { Component } from 'react';

import Information from './Information';
import Controls from './Controls';

import './headStyles.scss';

export default class Display extends Component {
  render() {
    return (
		<div className='display'>
			<Information />
			<Controls />
		</div>
    );
  }
}
