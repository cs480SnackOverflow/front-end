import React from 'react'
import { Button, Form, Input } from 'reactstrap';
import UIContainer from './UIContainer'
import CreateFlashcard from './CreateFlashcard'
import FlashcardList from './FlashcardList'

class CreateFlashcardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      flashcards:[]
    };

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleAddCard(event) {
    const flashcards = this.state.flashcards;
       this.setState({
           flashcards: flashcards.concat(<CreateFlashcard />)
       });
  }
  handleSubmit(event) {
    return(
      <FlashcardList flashcards={this.state.flashcards} title={this.state.title} />
    );

  }
  render() {
    return (
        <UIContainer>
          <Input type="text" name="title" id="term" placeholder="Your set's title here" size="lg"/>
          <Form onSubmit = {this.handleAddCard}>
          <div>
                {this.state.flashcards}
                <Button onClick={this.handleAddCard}>Add Flashcard</Button>

            </div>

          </Form>
          <Button onClick={this.handleSubmit}>Submit</Button>
       </UIContainer>
    );
  }
}
export default CreateFlashcardList;
