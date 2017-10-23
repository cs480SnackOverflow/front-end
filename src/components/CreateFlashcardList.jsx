import React from 'react'
import { Table,Button, Form, FormGroup, Input } from 'reactstrap';
import UIContainer from './UIContainer'
import CreateFlashcard from './CreateFlashcard'

class CreateFlashcardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      flashcards:[]
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
    const flashcards = this.state.flashcards;
       this.setState({
           flashcards: flashcards.concat(<CreateFlashcard />)
       });
  }
  render() {
    return (
        <UIContainer>
          <Form onSubmit = {this.handleSubmit}>
          <div>
                {this.state.flashcards}
                <Button onClick={this.handleSubmit}>Add Flashcard</Button>
            </div>

          </Form>
       </UIContainer>
    );
  }
}
export default CreateFlashcardList;
