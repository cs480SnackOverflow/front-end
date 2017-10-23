import React from 'react'
import {Table, FormGroup, Input} from 'reactstrap';

class CreateFlashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
  }
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }
  handleDefinitionChange(event) {
    this.setState({definition: event.target.value});
  }
  render() {
    return (

      <FormGroup>
        <Table bordered striped>
          <tbody>
            <tr>
              <th>
                Term
              </th>
              <th>
                Definition
              </th>
            </tr>
            <tr>
              <td>
                <Input type="text" name="term" id="term" placeholder="Enter a term" term={this.state.term} onChange={this.handleTermChange}/>
              </td>
              <td>
                <Input type="textarea" name="definition" placeholder="Enter a definition" id="definition" definition={this.state.definition} onChange={this.handleDefinitionChange}/>
              </td>
            </tr>
          </tbody>
        </Table>
      </FormGroup>

    );
  }
}
export default CreateFlashcard;
