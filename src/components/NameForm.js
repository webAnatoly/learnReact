import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textareaText: 'Default text',
      valueSelect: 'coconut',
      arrSelectOption: ['one', 'two']
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSelect(event) {
    this.setState({
      valueSelect: event.target.value
    })
  }

  handleMultiSelect(event) {
    const set = new Set();
    const currentValue = event.target.value;
    const options = event.target.options;
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected) { set.add(options[i].value) }
    }
    this.setState({ arrSelectOption: Array.from(set)})
  }

  handleSubmit(event) {
    // alert(`Entered value was submitted: ${this.state.value}` );
    const result = JSON.stringify(this.state); // result можно отправлять на сервер
    console.log(result);
    event.preventDefault();  
  }

  handleClick(event) {
    console.log(event.target.form); // получил доступ к форме по её элементу
  }

  handlerTextArea(event) {
    this.setState({
      textareaText: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit"/>
        <input type="button" value="Check" /> 
        <div>{this.state.value.toUpperCase()}</div>
        <label>This is checkbox <input type="checkbox" /></label>
        <br/><br/>
        <textarea rows="10" cols="30" value={this.state.textareaText} onChange={this.handlerTextArea.bind(this)}>
        </textarea>
        <br/>
        <label>
          Pick your favorite La Croix flavor:
          <select defaultValue={this.state.valueSelect} onChange={this.handleSelect.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/><br/>
        <select multiple={true} style={{ width: '250px', height: '100px' }} defaultValue={this.state.arrSelectOption} onChange={this.handleMultiSelect.bind(this)}>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
          <option value="five">Five</option>
        </select>
      </form>
    )
  }
}