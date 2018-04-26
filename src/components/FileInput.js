import React from 'react';

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFileInput(event) {
    console.log(this.fileInput.files[0].name);
  }

  render() {
    return(
      <label>
        Upload file: 
        <input type="file" multiple onChange={this.handleFileInput.bind(this)} ref={input => {
          this.fileInput = input;
        }}/>
      </label>
    )
  }

  componentDidMount() {
    // console.log('mount')
  }

  componentDidUpdate() {
    // console.log('update');;
  }
}