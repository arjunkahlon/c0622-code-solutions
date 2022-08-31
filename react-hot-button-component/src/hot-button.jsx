import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({
      clickCount: prev.clickCount + 1
    }));
  }

  render() {
    if (this.state.clickCount < 3) {
      return <button onClick = {this.handleClick} className="hot-button background-blue">Hot Button</button>;
    } else if (this.state.clickCount < 6) {
      return <button onClick={this.handleClick} className="hot-button background-purple">Hot Button</button>;
    } else if (this.state.clickCount < 9) {
      return <button onClick={this.handleClick} className="hot-button background-red">Hot Button</button>;
    } else if (this.state.clickCount < 12) {
      return <button onClick={this.handleClick} className="hot-button background-orange">Hot Button</button>;
    } else if (this.state.clickCount < 15) {
      return <button onClick={this.handleClick} className="hot-button background-yellow">Hot Button</button>;
    } else {
      return <button className="hot-button background-white">Hot Button</button>;
    }
  }
}
