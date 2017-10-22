import React from 'react'
import { Table } from 'reactstrap';
import FlashcardList from './FlashcardList';

class CreateFlashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: '',definition: ''};

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
  handleSubmit(event){
    alert('New flashcard created: ' + this.state.term +' '+ this.state.definition);
    event.preventDefault();
  }
  render(){
    return (
      <div>
      <Table bordered>
      <tbody>
      <form onSubmit={this.handleSubmit}>
        <label>
          Term:
            <input type="text" term = {this.state.term}
            onChange={this.handleChange1} />
          Definition:
            <input type="text" definition = {this.state.definition}
            onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </tbody>
        </Table>
        </div>

    );
  }
}
export default CreateFlashcard;
