import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          height={120}
          width={110}
          src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-23.jpg"
          alt="loading"
        />
      </div>
    );
  }
}
