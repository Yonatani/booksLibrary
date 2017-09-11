import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { emptyBook } from './BooksLibrary';
import './headerStyle.scss';

const Header = ({ text, addBook }) => (
  <div className="headerContainer">
    <h1
      style={{

      }}
    >
      {text}
    </h1>
    <div className="addBookBtnContainer">
      <FloatingActionButton onClick={() => addBook(emptyBook)}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  addBook: PropTypes.func.isRequired
};

export default Header;
