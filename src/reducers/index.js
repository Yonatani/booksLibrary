import { combineReducers } from 'redux';
import books from './books';

const booksLibraryApp = combineReducers({
  books,
});

export default booksLibraryApp;
