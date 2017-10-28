import React from 'react'
import { Container, Col, Row, Button, Form, Input } from 'reactstrap';
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
    this.handleDelete = this.handleDelete.bind(this);
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
  handleDelete(event) {
       const flashcards = this.state.flashcards;
       flashcards.splice(flashcards.length-1,1);
       this.setState({
           flashcards: flashcards
       });

  }
  render() {
    return (
        <Container fluid>
          <Row>
            <Col>
              <Input type="text" name="title" id="term" placeholder="Your set's title here" size="lg"/>
            </Col>
          </Row>
          <div>
            <Form onSubmit = {this.handleAddCard}>
              <div>
                    {this.state.flashcards}
              </div>
            </Form>
          </div>
          <Row>
            <Col md="3">
              <Button color="primary" onClick={this.handleAddCard}>Add Flashcard</Button>
            </Col>
            <Col md="3">
              <Button color="success" onClick={this.handleSubmit}>Submit</Button>
            </Col>
            <Col md="3">
              <Button color="failure" onClick={this.handleDelete}>Delete Flashcard</Button>
            </Col>
          </Row>
       </Container>
    );
  }
}
export default CreateFlashcardList;
