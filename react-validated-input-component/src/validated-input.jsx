import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    let error = '';
    let icon = 'fa fa-times red';
    if (this.state.input.length <= 0) {
      error = 'A password is required.';
    } else if (this.state.input.length < 8) {
      error = 'Your password is too short.';
    } else {
      error = '';
      icon = 'fas fa-check green';
    }

    return (
      <div>
        <input onChange={this.handleChange} type="password" id='password' />
        <i className={`check-mark ${icon}`}></i>
        <div>
          <span className='red'>{error}</span>
        </div>
      </div>
    );
  }
}
