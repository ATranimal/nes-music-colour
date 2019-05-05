import React, { Component } from 'react';
import MidiPlayer from 'midi-player-js';
import DatabaseService from '../../services/DatabaseService';
import axios from 'axios';
import Soundfont from 'soundfont-player';

class Player extends Component {
  state = {
    song: '',
  }

  componentDidMount() {
    axios.get('/database')
      .then(res => {
        var songBuffer = res.data.midi;
        this.setState({ 
          song: songBuffer
        })
        
        var ac = new AudioContext;
        Soundfont.instrument(ac, 'lead_1_square').then(instrument => {
          Player = new MidiPlayer.Player(event => {
            if (event.name == 'Note on') {
              console.log(event);
              instrument.play(event.noteName, ac.currentTime, {gain:event.velocity/50});
            }
          });

          Player.loadDataUri(this.state.song);
          Player.play();
        })


      }
    )
  }

  render() {
    return (
      <h1> { this.state.song } </h1>
    );
  }
}

export default Player;