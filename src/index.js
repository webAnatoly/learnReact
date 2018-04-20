import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {

  any = {
    // это экспериментальный синтаксис, чтобы его использовать нужно установить "babel-preset-stage-0": "^6.24.1" или выше
    a: 4
  }

  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
);