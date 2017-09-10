import React, { Component } from "react";
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Header from './Header';
import EditBook from './EditBook';
import BooksList from './BooksList';

const emptyBook = {
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
    this.state = {
      showModal: false,
      editableBook: emptyBook
    }
  }

  componentWillMount() {
    //const visits = parseInt(getCookie('visits'));
    //this.setState({isLoading: false, visits: visits})
    this.props.getBooks();
  }

  editBook(book) {
    this.setState({showModal: true, editableBook: book})
  }

  handleClose = () => {
    this.setState({showModal: false});
  };

  render() {
    const {books} = this.props
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        <Header text={'Books Library'}/>
        {books.length > 0 ? <BooksList books={books} editBook={this.editBook}/> : null}
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.showModal}
        >
          <EditBook />
        </Dialog>
      </div>
    );
  }
}

BooksLibrary.propTypes = {
  text: PropTypes.string.isRequired
};

export default BooksLibrary;
