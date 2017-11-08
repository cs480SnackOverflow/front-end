import { ADD_FLASHCARD, DELETE_FLASHCARD } from '../constants';

export const addFlashcard = (term, definition) => {
  const action = {
    type: ADD_FLASHCARD,
    term,
    definition
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteFlashcard = (id) => {
  const action = {
    type: DELETE_FLASHCARD, 
    id
  }
  console.log('deleting in actions', action);
  return action;
}
