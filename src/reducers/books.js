import {ADD_INITIAL_BOOKS} from '../actions/books';

const initialstate = {
  bookTitle: 'ok ok ok'
};

const books = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_INITIAL_BOOKS:
      const {books} = action;
      console.log('books action',action.books)
      return books;
    default:
      return initialstate;
  }
};

export default books;
