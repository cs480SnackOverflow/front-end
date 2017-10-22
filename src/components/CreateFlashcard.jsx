import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FlashcardList from './FlashcardList';

class CreateFlashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: ''
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({term: event.target.value});
  }
  handleChange2(event) {
    this.setState({definition: event.target.value});
  }
  handleSubmit(event) {
    alert('New flashcard created: ' + this.state.term + ' ' + this.state.definition);
    event.preventDefault();
  }
  render() {
    return (
              <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="term">Term</Label>
                <Input type="text" name="term" id="term" term={this.state.term} onChange={this.handleChange1}/>
              </FormGroup>
              <FormGroup>
                <Label for="definition">Definition</Label>
                <Input type="textarea" name="definition" id="definition" term={this.state.definition} onChange={this.handleChange2}/>
              </FormGroup>
                <Button>Submit</Button>
              </Form>
    );
  }
}
export default CreateFlashcard;
