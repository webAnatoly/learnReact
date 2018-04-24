import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: true};
  }

  handleClick = (id, e) => {
    console.log(id, e);
    this.setState( prevState => ({isToggled: !prevState.isToggled}));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(null, 4)}>
        {this.state.isToggled ? 'ON' : 'OFF'}
      </button>
    )
  }
}