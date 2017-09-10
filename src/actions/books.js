import _ from 'lodash';
import BooksService from '../services/booksService'
export const ADD_INITIAL_BOOKS = 'ADD_INITIAL_BOOKS'
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
      const newBooksArray = [...currentBooksClone, {...book, id: currentBooksClone.length + 1}];
      dispatch(addBooks(newBooksArray))
    } else {
      const newBooksArray = _.union(currentBooksClone, [book])
      console.log('newBooksArray22',newBooksArray)
      dispatch(addBooks(newBooksArray))
    }
    console.log('currentBooksClone',currentBooksClone)
  }
};

export function addBooks(books) {
  return {
    type: ADD_INITIAL_BOOKS,
    books
  };
}


