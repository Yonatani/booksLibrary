import React from 'react'
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { emptyBook } from './BooksLibrary'
const Header = ({ text, addBook }) => (
  <div style={{display: 'flex', backgroundColor: '#4286f4', height: 80, marginRight: 15, marginLeft: 15, marginBottom: 20, justifyContent: 'space-around' }}>
    <h1
      style={{
        textAlign: 'left',
        color: 'white',
        marginLeft: 30
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
