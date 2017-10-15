import React, { Component } from 'react';

class Flashcard extends Component {
  render() {
    return (
      <tr>
        <td> { this.props.flashcard.term } </td>
        <td> { this.props.flashcard.definition } </td>
      </tr>
    )
  }
}

export default Flashcard;
