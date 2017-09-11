import _ from 'lodash';
import BooksService from '../services/booksService';
let incrementId = 5; //on production, book would be created by the server with incremented id by the DB
export const ADD_INITIAL_BOOKS = 'ADD_INITIAL_BOOKS';
export function getBooks() {
  return (dispatch) => {
    BooksService.getBooks().then((books) => {
      dispatch(addBooks(books));
    });
  };
}

export function createOrEditBook(book) {
  return (dispatch, getState) => {
    const currentBooksClone = _.cloneDeep(getState().books);
    let clonedBook = book;
    if(clonedBook.id === -1) {
      clonedBook = {...clonedBook, id: incrementId += 1};
    }
    const newBooksArray = _.unionBy([clonedBook], currentBooksClone, (currBook) => currBook.id);
    dispatch(addBooks(newBooksArray));
  };
}

export function deleteBook(bookId) {
  return (dispatch, getState) => {
    const currentBooksClone = _.cloneDeep(getState().books);
    const newBooksArray = _.filter(currentBooksClone, (book) => bookId !== book.id);
    dispatch(addBooks(newBooksArray));
  };
}

export function addBooks(books) {
  return {
    type: ADD_INITIAL_BOOKS,
    books
  };
}


