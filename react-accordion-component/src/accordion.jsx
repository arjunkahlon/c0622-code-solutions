import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(number) {
    const clickedIndex = parseInt(number) - 1;
    if (clickedIndex === this.currentIndex) {
      this.setState({ currentIndex: null });
    } else {
      this.setState({ currentIndex: clickedIndex });
    }
  }

  render() {
    return <div></div>;
  }

}
