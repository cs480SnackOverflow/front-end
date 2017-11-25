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
import axios from 'axios';
import uuidv1 from 'uuid';

require("../index.css");

class CreateFlashcardList extends React.Component {
  constructor(props) {
    super(props);
    let initialId = this.getStartingId();
    this.state = {
      term: '',
      definition: '',
      title: '',
      id: initialId
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
     flashcards[i].userId = 0;
     flashcards[i].setId = uuidv1();
     flashcards[i].id = this.state.id;
     this.setState({id: this.state.id+1});
  }
  extractTermAndDefinition(flashcard, i){
    return  {
      term: flashcard.term,
      definition: flashcard.definition
    };
  }
  getStartingId(){
    let total = 0;
    axios.get('flashcards/total').then(response => {
      total = response;
    });
    return total;
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
      <Table  bordered>
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>

          {flashcards.map(flashcard => {
            return (
              <tr className="bottom-margin">
                <td>{flashcard.term}</td>
                <td>{flashcard.definition}</td>
                <button type="button" className="btn indian-red full btn-danger" onClick={() => this.deleteFlashcard(flashcard.id)}>Delete
                </button>
              </tr>

            )
          })
        }
          <button type="button" className="top-margin btn btn-success" onClick={() => this.handleSubmit(this)}>Submit
          </button>
        </tbody>
      </Table>
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
          <Row>
            <Col md="3">
              <button type="button" className="bottom-margin btn btn-success" onClick={() => this.addFlashcard()}>Add Flashcard</button>
            </Col>
          </Row>
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
