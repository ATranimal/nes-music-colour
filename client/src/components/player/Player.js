import '../App.scss';

import React, { Component } from 'react';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../store/store";

import MidiPlayer from 'midi-player-js';
import axios from 'axios';
import Soundfont from 'soundfont-player';

import DatabaseService from '../../services/DatabaseService';
import Head from '../head/Head';
import List from '../list/List';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
		gameTitle: 'SMB',
		trackNumber: '01',
		songData: '',
		status: ''
	};
  }


//   componentDidMount() {
//     axios.get('/database')
//       .then(res => {
//         var songBuffer = res.data.midi;
//         this.setState({ 
//           song: songBuffer
//         })
        
//         var ac = new AudioContext();
//         Soundfont.instrument(ac, 'lead_1_square').then(instrument => {
//           Player = new MidiPlayer.Player(event => {
//             if (event.name === 'Note on') {
//               console.log(event);
//               instrument.play(event.noteName, ac.currentTime, {gain:event.velocity/50});
//             }
//           });

//           Player.loadDataUri(this.state.song);
//           Player.play();
//         })
//       }
//     )
//   }

  render() {
    return (
		<ReduxProvider store={reduxStore}>
			<div className="player">
				<Head
				gameTitle={this.state.gameTitle}
				trackNumber={this.state.trackNumber}
				/>
				<List />
			</div>
		</ReduxProvider>
    );
  }
}

export default Player;