import React from 'react'
import { getBooks, createOrEditBook } from '../actions/books'
import { connect } from 'react-redux'
import BooksLibrary from '../components/BooksLibrary'

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks()),
    createOrEditBook: (book) => dispatch(createOrEditBook(book))
  }
}

const mapStateToProps = state => {
  console.log('state',state)
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksLibrary)
