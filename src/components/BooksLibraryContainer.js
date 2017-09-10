import React from 'react'
import { getBooks } from '../actions/books'
import { connect } from 'react-redux'
import BooksLibrary from '../components/BooksLibrary'

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks())
  }
}

const mapStateToProps = state => {
  console.log('state',state)
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksLibrary)
