import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MultiTypeahead extends Component {
  render() {
    return (
      <div className="multitypeahead">
        { this.props.children }
      </div>
    )
  }
}