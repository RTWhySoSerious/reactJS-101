import React, { Component } from 'react';

import Dropdown from './Dropdown';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { isOpened: false };
  }

  toggleState(){
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    console.log('IsOpened',this.state.isOpened);
    return (
     <div onClick={this.toggleState.bind(this)}>
       <Dropdown />
     </div>
    )
  }
}

export default App;