import React, { Component } from 'react';
import { Input } from 'reactstrap';

export default class FlashcardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: ''
    };

    this.setTerm = this.setTerm.bind(this);
    this.setDefinition = this.setDefinition.bind(this);
  }

  setTerm(event) {
    this.setState({term: event.target.value});
  }

  setDefinition(event) {
    this.setState({definition: event.target.value});
  }

  render() {
    return (
      <tr>
        <td>
          <Input type="text" value={this.state.term} onChange={this.setTerm} />
        </td>
        <td>
          <Input type="textarea" value={this.state.definition} onChange={this.setDefinition} />
        </td>
      </tr>
    );
  }
}
