import React, { Component } from 'react';
import PropTypes from "prop-types";

import './headStyles.scss';

export default class Information extends Component {
  render() {
    return (
      <div className="information">
        <p> { this.props.gameTitle } and { this.props.trackNumber } </p>
      </div>
    )
  }
}

Information.propTypes = {
	gameTitle: PropTypes.string,
	trackNumber: PropTypes.string
}