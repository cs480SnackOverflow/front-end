import { ADD_FLASHCARD, DELETE_FLASHCARD } from '../constants';

const flashcard = (action) => {
  let { term, definition } = action;
  return {
    id: Math.floor(Math.random() * 20),
    version: 1,
    term,
    definition,
    setId: "default-set",
    userId: "default-user",
    title: "default-title"
  }
}

const removeById = (state = [], id) => {
  const flashcards = state.filter(flashcard => flashcard.id !== id);
  console.log('new reduced reminders', flashcards);
  return flashcards;
}
const flashcards = (state = [], action) => {
  let flashcards = null;
  switch(action.type) {
    case ADD_FLASHCARD:
      flashcards = [...state, flashcard(action)];
      console.log('reminders as state', flashcards);
      return flashcards;
    case DELETE_FLASHCARD:
      flashcards = removeById(state, action.id);
      return flashcards;
    default:
      return state;
  }
}

export default flashcards;
