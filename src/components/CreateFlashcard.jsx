import React from 'react'
import { Table,Button, Form, FormGroup, Input } from 'reactstrap';
import UIContainer from './UIContainer'

class CreateFlashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      flashcards:[]
    };

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
  handleSubmit(event) {
    alert('New flashcard created: ' + this.state.term + ' ' + this.state.definition);
    event.preventDefault();
  }
  render() {
    return (
        <UIContainer>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input type="text" name="title" id="term" placeholder="Your set's title here"/>
                  <Table bordered striped>
                    <tbody>
                      <tr>
                        <th> Term </th>
                        <th> Definition </th>
                      </tr>
                      <tr>
                        <td>
                          <Input type="text" name="term" id="term" term={this.state.term} onChange={this.handleChange1}/>
                        </td>
                        <td>
                          <Input type="textarea" name="definition" id="definition" term={this.state.definition} onChange={this.handleChange2}/>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </FormGroup>
                <Button>Add card </Button>
                <Button>Submit</Button>
              </Form>
              </UIContainer>
    );
  }
}
export default CreateFlashcard;
