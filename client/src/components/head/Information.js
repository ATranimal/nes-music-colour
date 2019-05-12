import React, { Component } from 'react';
import { connect } from "react-redux";

import PropTypes from "prop-types";

import './headStyles.scss';

class Information extends Component {
  render() {
    return (
      <div className="information">
        <p> { this.props.song.gameTitle } and { this.props.song.trackNumber } </p>
      </div>
    )
  }
}

Information.propTypes = {
	gameTitle: PropTypes.string,
	trackNumber: PropTypes.string
}

const mapStateToProps = state => ({
	song: state.song
});

export default connect(
	mapStateToProps
)(Information);