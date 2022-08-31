import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      started: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }

  handleClick() {
    this.setState({
      started: !this.state.started
    });

    if (this.state.started) {
      this.stopWatch();
    } else {
      this.startWatch();
    }
  }

  startWatch() {
    this.intervalID = setInterval(() => {
      return this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  }

  stopWatch() {
    clearInterval(this.intervalID);
  }

  resetWatch() {
    if (!this.state.started) {
      this.setState({ currentTime: 0 });
    }
  }

  render() {
    let playButton = 'fa-solid fa-play';
    if (this.state.started) {
      playButton = 'fa-solid fa-pause';
    } else {
      playButton = 'fa-solid fa-play';
    }
    return <div>
      <div onClick={this.resetWatch} className='stop-watch-container'>
        <div className='time-wrapper'>
          <h2>{this.state.currentTime}</h2>
        </div>
      </div>
      <div className='play-button-wrapper'>
        <i onClick={this.handleClick} className={`play-button ${playButton}`}></i>
      </div>
    </div>;
  }
}
