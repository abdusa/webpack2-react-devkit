import React from 'react';

require('./Header.css')

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1>This is Header section!</h1>
        </div>
      </header>
    )
  }
}
