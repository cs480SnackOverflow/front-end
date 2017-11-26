import React, { Component } from 'react';
import Flashcard from './Flashcard';
import { Table } from 'reactstrap';

class FlashcardList extends Component {

  render() {
    let flashcards = [];
    if(this.props.flashcards){
      flashcards = this.props.flashcards.map(flashcard =>
        <Flashcard flashcard={flashcard}/>
      );
    }

    return (
      <div>
        <h1> {this.props.title} </h1>
        <Table bordered striped>
          <tbody>
            <tr>
              <th> Term </th>
              <th> Definition </th>
            </tr>
            {flashcards}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FlashcardList;
