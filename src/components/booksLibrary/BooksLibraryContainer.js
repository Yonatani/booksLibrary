import { getBooks, createOrEditBook, deleteBook } from '../../actions/books';
import { connect } from 'react-redux';
import BooksLibrary from './BooksLibrary';

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks()),
    createOrEditBook: (book) => dispatch(createOrEditBook(book)),
    deleteBook: (bookId) => dispatch(deleteBook(bookId))
  };
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksLibrary);
