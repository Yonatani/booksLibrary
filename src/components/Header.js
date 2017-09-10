import React from 'react'
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { emptyBook } from './BooksLibrary';
import './HeaderStyle.scss'

const Header = ({ text, addBook }) => (
  <div className="container">
    <h1
      style={{

      }}
    >
      {text}
    </h1>
    <div style={{alignSelf: 'center'}}>
      <FloatingActionButton onClick={() => addBook(emptyBook)}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
