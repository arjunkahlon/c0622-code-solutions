import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(number) {

    if (number === this.state.currentNumber) {
      this.setState({
        currentNumber: null
      });
    } else {
      this.setState({
        currentNumber: number
      });
    }
  }

  render() {
    const topicsList = this.props.topics;
    const carouselElement = topicsList.map(topic => {
      if (topic.number === this.state.currentNumber) {
        return (
          <li key={topic.number} onClick={() => this.handleClick(topic.number)}>
            <div>
              <h2 className='topic-header'>{topic.name}</h2>
              <p className='topic-description'>{topic.description}</p>
            </div>
          </li>
        );
      } else {
        return (
          <li key={topic.number} className='topic-list-item' onClick={() => this.handleClick(topic.number)}>
            <div>
              <h2 className='topic-header'>{topic.name}</h2>
              <p className='topic-description hidden'>{topic.description}</p>
            </div>
          </li>
        );
      }

    });

    return <ul className='topic-list'>{carouselElement}</ul>;
  }

}
