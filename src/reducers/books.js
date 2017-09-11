import {ADD_INITIAL_BOOKS} from '../actions/books';

const initialstate = [];

const books = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_INITIAL_BOOKS: {
      const {books} = action;
      return books;
    }
    default:
      return state;
  }
};

export default books;
