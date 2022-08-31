import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  }

  render() {
    if (this.state.buttonClicked) {
      return <div onClick={this.handleClick} className='toggle-box-on'>
        <div className='toggle-switch-on'></div>
      </div>;
    } else {
      return <div onClick={this.handleClick} className='toggle-box-off'>
        <div className='toggle-switch-off'></div>
      </div>;
    }
  }
}
