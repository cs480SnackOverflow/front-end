import React from 'react'
import { connect } from 'react-redux';
import { addFlashcard, deleteFlashcard } from '../actions';
import { Container, Col, Row, Table, Form, FormGroup, Input } from 'reactstrap';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import uuidv4 from 'uuid';

class CreateFlashcardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      definition:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addFlashcard() {
    this.props.addFlashcard(this.state.term, this.state.definition);
  }

  deleteFlashcard(id) {
    this.props.deleteFlashcard(id);
  }

  handleSubmit(event) {
    alert("Your flashcard set has been submitted!");
    const id = uuidv4();
    axios.post('/set', {
    flashcards: this.props.flashcards,
    name: this.props.title,
    user: id
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  renderFlashcards() {
    const { flashcards } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>

        {
          flashcards.map(flashcard => {
            return (
              <tr>
                <td>{flashcard.term}</td>
                <td>{flashcard.definition}</td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteFlashcard(flashcard.id)}
                >Delete
                </button>
              </tr>

            )
          })
        }
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.handleSubmit(this)}
        >Submit
        </button>
        </tbody>
      </Table>
    );
  }

  render() {
    console.log('this.props', this.props);
    return (
      <Container fluid>
        <Row>
          <Col>
            <Input type="text" name="title" id="term" placeholder="Your set's title here" size="lg"/>
          </Col>
        </Row>
        <Form onSubmit= {this.handleAddCard}>
          <FormGroup>
            <Row>
              <Col>
                <input
                  className="form-control"
                  placeholder="Term"
                  onChange={event => this.setState({term: event.target.value})}
                />
              </Col>
              <Col>
                <input
                  className="form-control"
                  placeholder="Definition"
                  onChange={event => this.setState({definition: event.target.value})}
                />
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col md="3">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.addFlashcard()}
              >Add Flashcard</button>
            </Col>
          </Row>
          { this.renderFlashcards() }
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: state
  }
}
export default connect(mapStateToProps, { addFlashcard, deleteFlashcard })(CreateFlashcardList);
