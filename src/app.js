import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';

const app = document.getElementById('app');

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'abdusa'
    }
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

render(<Layout />, app);
