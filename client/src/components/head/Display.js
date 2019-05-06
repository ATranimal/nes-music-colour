import React, { Component } from 'react';

import Information from './Information';
import Controls from './Controls';

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
