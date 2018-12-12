import React, { Component } from 'react';
import Sound from 'react-sound';

import Toggle from './Toggle';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sleeping: false
    };

    this.onSleepChange = this.onSleepChange.bind(this);
  }

  onSleepChange() {
    const { sleeping } = this.state;

    this.setState({
      sleeping: !sleeping
    });
  }

  render() {
    const { sleeping } = this.state;
    return (
      <div className="App">
        <Toggle onSleepChange={this.onSleepChange} isSleeping={sleeping} />
        {sleeping &&
          (
            <Sound
              url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/white_noise.mp3"
              playStatus={Sound.status.PLAYING}
              playFromPosition={300 /* in milliseconds */}
              loop
            />
          )
        }
      </div>
    );
  }
}

export default App;
