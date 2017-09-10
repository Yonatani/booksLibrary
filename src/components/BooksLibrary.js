import React, { Component } from "react";
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Header from './Header';
import EditBook from './EditBook';
import BooksList from './BooksList';
import _ from 'lodash';

export const emptyBook = {
  id: -1,
  author: '',
  date: {},
  title: '',
  coverUrl: ''
}

class BooksLibrary extends Component {

  constructor(props) {
    super(props);
    this.editBook = this.editBook.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editBookDetail = this.editBookDetail.bind(this);
    this.checkEditableBookParams = this.checkEditableBookParams.bind(this);
    this.state = {
      showModal: false,
      editableBook: emptyBook,
      validatedForm: false
    }
  }

  componentWillMount() {
    this.props.getBooks();
  }

  editBook(book) {
    this.setState({showModal: true, editableBook: book})
  }

  editBookDetail(value, key) {
    this.setState({editableBook: {
      ...this.state.editableBook,
      [key]: value
    }}, () => {
      this.checkEditableBookParams()
    })
  }

  handleClose = () => {
    this.setState({showModal: false});
  };

  handleSubmit = () => {
    if(this.state.validatedForm){
      this.props.createOrEditBook(this.state.editableBook);
      this.handleClose()
    }
  }

  checkEditableBookParams() {
    const {author, title, coverUrl, date} = this.state.editableBook;
    if(author.length > 0 && title.length > 0 && coverUrl.length > 0 && date instanceof Date) {
      this.setState({validatedForm: true})
    }
  }

  toTitleCase(str) {
    let onlyLetters = str.replace(/[^a-zA-Z0-9]/g,' ');
    return onlyLetters.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    const {books, deleteBook} = this.props
    const {editableBook, validatedForm} = this.state
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!validatedForm}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div style={{ width: '75%'}}>
        <Header text={'Books Library'} addBook={this.editBook}/>
        {books.length > 0 ? <BooksList books={books} editBook={this.editBook} toTitleCase={this.toTitleCase}/> : null}
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.showModal}
        >
          <EditBook {...editableBook} editBook={this.editBookDetail} deleteBook={(bookId) => deleteBook(bookId)}/>
        </Dialog>
      </div>
    );
  }
}

BooksLibrary.propTypes = {
  text: PropTypes.string.isRequired
};

export default BooksLibrary;
