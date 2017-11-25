import { ADD_FLASHCARD, DELETE_FLASHCARD } from '../constants';

var initialId = 0;
const flashcard = (action) => {
  let { term, definition } = action;
  initialId = initialId + 1;
  return {
    id: initialId+1,
    term,
    definition
  }
}

const removeById = (state = [], id) => {
  const flashcards = state.filter(flashcard => flashcard.id !== id);
  return flashcards;
}
const flashcards = (state = [], action) => {
  let flashcards = null;
  switch(action.type) {
    case ADD_FLASHCARD:
      flashcards = [...state, flashcard(action)];
      return flashcards;
    case DELETE_FLASHCARD:
      flashcards = removeById(state, action.id);
      return flashcards;
    default:
      return state;
  }
}

export default flashcards;
