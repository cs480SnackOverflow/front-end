import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const flashcards = [
    {
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class StudyFlashcardSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      title: ''
    };
  }
render(){
  return(
    <div>
      <UncontrolledCarousel items={this.props.flashcards} />;
    </div>
  );
}
}
export default StudyFlashcardSet;
