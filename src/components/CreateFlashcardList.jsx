import React from 'react'
import {connect} from 'react-redux';
import {addFlashcard, deleteFlashcard} from '../actions';
import {
  Container,
  Col,
  Row,
  Table,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import {Card, Button, CardTitle, CardText} from 'reactstrap';

import axios from 'axios';
import uuidv1 from 'uuid';

require("../index.css");

class CreateFlashcardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: '',
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addFlashcard() {
    this.props.addFlashcard(this.state.term, this.state.definition);
  }

  deleteFlashcard(id) {
    this.props.deleteFlashcard(id);
  }

  addMoreInfoToFlashcard(flashcard, i, flashcards) {
    flashcards[i].title = this.state.title;
    flashcards[i].version = 0;
    flashcards[i].userId = "default";
    flashcards[i].id = i + 1;
    flashcards[i].setId = uuidv1();
  }

  handleSubmit(event) {
    alert("Your flashcard set has been submitted!");
    const flashcards = this.props.flashcards;
    flashcards.forEach(this.addMoreInfoToFlashcard.bind(this));
    axios.post('flashcard/set/new', flashcards).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  renderFlashcards() {
    const {flashcards} = this.props;
    return (
      <div>
      <Table bordered>
        {flashcards.map(flashcard => {
          return (
            <p>
            <Card body>
              <CardTitle>
                <p2>{flashcard.term}</p2>
              </CardTitle>
              <CardText>
                <p3>{flashcard.definition}</p3>
              </CardText>
              <Button type="button" className="btn indian-red full btn-danger" onClick={() => this.deleteFlashcard(flashcard.id)}>Delete</Button>
            </Card>
            </p>
          )
        })
        }
      </Table>
      <p>
      <Button type="button" size= "lg" className="top-margin btn btn-success" onClick={() => this.handleSubmit(this)}>Submit
      </Button>
      </p>
      </div>
    );
  }

  render() {
    console.log('this.props', this.props);
    return (
      <Container className="padding" fluid>
        <Row>
          <Col>
            <Input className="title-margin slate" type="text" name="title" id="term" placeholder="Your set's title here" size="lg" onChange={event => this.setState({title: event.target.value})}/>
          </Col>
        </Row>
        <Form onSubmit={this.handleAddCard}>
          <FormGroup>
            <Row>
              <Col>
                <input className="form-control slate" placeholder="Term" onChange={event => this.setState({term: event.target.value})}/>
              </Col>
              <Col>
                <input className="form-control slate" placeholder="Definition" onChange={event => this.setState({definition: event.target.value})}/>
              </Col>
            </Row>
          </FormGroup>
          <p>
            <button type="button" className="bottom-margin btn btn-success" size = "lg" onClick={() => this.addFlashcard()}>Add Flashcard</button>
          </p>
          {this.renderFlashcards()}
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {flashcards: state}
}
export default connect(mapStateToProps, {addFlashcard, deleteFlashcard})(CreateFlashcardList);
