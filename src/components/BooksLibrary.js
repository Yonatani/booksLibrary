import React, { Component } from "react";
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Header from './Header';
import EditBook from './EditBook';
import BooksList from './BooksList';

export const emptyBook = {
  id: -1,
  author: '',
  date: Date.now(),
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
    this.state = {
      showModal: false,
      editableBook: emptyBook
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
    }})
  }

  handleClose = () => {
    this.setState({showModal: false});
  };

  handleSubmit = () => {
    this.props.createOrEditBook(this.state.editableBook)
  }

  render() {
    const {books} = this.props
    const {editableBook} = this.state
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div style={{ width: '75%'}}>
        <Header text={'Books Library'} addBook={this.editBook}/>
        {books.length > 0 ? <BooksList books={books} editBook={this.editBook}/> : null}
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.showModal}
        >
          <EditBook {...editableBook} editBook={this.editBookDetail}/>
        </Dialog>
      </div>
    );
  }
}

BooksLibrary.propTypes = {
  text: PropTypes.string.isRequired
};

export default BooksLibrary;
