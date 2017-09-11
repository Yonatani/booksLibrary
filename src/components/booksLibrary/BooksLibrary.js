import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import Header from './Header';
import EditBook from '../editBook/EditBook';
import BooksList from '../booksList/BooksList';
import './headerStyle.scss';

export const emptyBook = {
  id: -1,
  author: '',
  date: {},
  title: '',
  coverUrl: ''
};

class BooksLibrary extends Component {

  constructor(props) {
    super(props);
    this.editBook = this.editBook.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editBookDetail = this.editBookDetail.bind(this);
    this.checkEditableBookParams = this.checkEditableBookParams.bind(this);
    this.deleteEditableBook = this.deleteEditableBook.bind(this);
    this.state = {
      showModal: false,
      editableBook: emptyBook,
      validatedForm: false
    };
  }

  componentWillMount() {
    this.props.getBooks();
  }

  editBook(book) {
    this.setState({showModal: true, editableBook: book});
  }

  editBookDetail(value, key) {
    this.setState({editableBook: {
      ...this.state.editableBook,
      [key]: value
    }}, () => {
      this.checkEditableBookParams();
    });
  }

  handleClose = () => {
    this.setState({showModal: false});
  };

  handleSubmit = () => {
    if(this.state.validatedForm){
      this.props.createOrEditBook(this.state.editableBook);
      this.handleClose();
    }
  }

  checkEditableBookParams() {
    const {author, title, coverUrl, date} = this.state.editableBook;
    if(author.length > 0 && title.length > 0 && coverUrl.length > 0 && date instanceof Date) {
      this.setState({validatedForm: true});
    }
  }

  toTitleCase(str) {
    let onlyLetters = str.replace(/[^a-zA-Z0-9]/g,' ');
    return onlyLetters.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  deleteEditableBook() {
    const {editableBook} = this.state;
    this.props.deleteBook(editableBook.id);
    this.handleClose();
  }

  render() {
    const {books} = this.props;
    const {editableBook, validatedForm} = this.state;
    const actions = [
      <FlatButton
        key={1}
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        disabled={!validatedForm}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div className="booksLibraryContainer">
        <Header text={'Books Library'} addBook={this.editBook}/>
        <BooksList books={books} editBook={this.editBook} toTitleCase={this.toTitleCase}/>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.showModal}
        >
          <EditBook {...editableBook} editBook={this.editBookDetail} deleteBook={this.deleteEditableBook}/>
        </Dialog>
      </div>
    );
  }
}

BooksLibrary.propTypes = {
  books: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  createOrEditBook: PropTypes.func.isRequired
};

export default BooksLibrary;
