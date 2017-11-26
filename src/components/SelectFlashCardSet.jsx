import React from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import annyang from 'annyang';
import {
  Container,
  Col,
  Row,
  Table,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

class SelectFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }
  getTitles(set){
    return set.title;
  }
  getSetIds(set){
    return set.setId;
  }
  getFlashcardSets() {
    axios.get('flashcard/set/allsets').then(response => {
      console.log(response);
      let sets = response.data;
      this.setState({sets: sets});
    }).catch(function(error) {
      console.log(error);
    });
  }
  getInitialState() {
    return {flashcards: [],title:''};
  }
  componentDidMount() {
    this.getFlashcardSets();
  }
  selectSet(selectedTitle){

  }

  render() {
    const sets = this.state.sets;
    return (
      <div>
      <Table>
        <thead>
          <tr>
            <th>Set</th>
          </tr>
        </thead>
        <tbody>
          {sets.map(set => {
            return (
              <tr>
              <button type="button" className="btn btn-primary" onClick={() => this.selectSet(set.setId)}>{set.title}
              </button>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
      </div>
    );
  }
}

export default SelectFlashcardSet;
