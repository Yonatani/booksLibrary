import BooksService from '../services/booksService'
export const ADD_INITIAL_BOOKS = 'ADD_INITIAL_BOOKS'
export function getBooks() {
  return (dispatch) => {
    const books = BooksService.getBooks().then((books) => {
      dispatch(addInitialBooks(books))
    });
  }
};

export function addInitialBooks(books) {
  return {
    type: ADD_INITIAL_BOOKS,
    books
  };
}
