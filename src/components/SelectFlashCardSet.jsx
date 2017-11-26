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
  Input,
  Button
} from 'reactstrap';
import LoadFlashcardSet from './LoadFlashcardSet';

class SelectFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sets: [],
      set: "0"
    };
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
  componentDidMount() {
    this.getFlashcardSets();
  }
  render() {
    console.log(this.state.set);
    console.log(this.state.sets);
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
                console.log(set);
                return (
                  <tr>
                    <Button type="button" className="btn btn-primary" onClick={() => this.setState({set:set.setId})}>{set.title}
                    </Button>
                  </tr>
                )
              })
}
            </tbody>
          </Table>
            <LoadFlashcardSet setId={this.state.set}/>
        </div>
      );
  }
}

export default SelectFlashcardSet;
