import _ from 'lodash';
import BooksService from '../services/booksService';
let incrementId = 6;
export const ADD_INITIAL_BOOKS = 'ADD_INITIAL_BOOKS';
export function getBooks() {
  return (dispatch) => {
    const books = BooksService.getBooks().then((books) => {
      dispatch(addBooks(books))
    });
  }
};

export function createOrEditBook(book) {
  return (dispatch, getState) => {
    const currentBooksClone = _.cloneDeep(getState().books);
    if(book.id === -1) {
      const newBooksArray = [...currentBooksClone, {...book, id: incrementId += 1}];
      dispatch(addBooks(newBooksArray))
    } else {
      const newBooksArray = _.unionBy([book], currentBooksClone, (currBook) => currBook.id)
      dispatch(addBooks(newBooksArray))
    }
  }
};

export function deleteBook(bookId) {
  return (dispatch, getState) => {
    const currentBooksClone = _.cloneDeep(getState().books);
    const newBooksArray = _.filter(currentBooksClone, (book) => bookId !== book.id);
    dispatch(addBooks(newBooksArray))
  }
};

export function addBooks(books) {
  return {
    type: ADD_INITIAL_BOOKS,
    books
  };
}


