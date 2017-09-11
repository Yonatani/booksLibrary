import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import './booksListStyle.scss';


const BooksList = ({ books, editBook, toTitleCase }) => (
  <div className="bookListContainer">
    <GridList
      cols={3}
      cellHeight={180}
      padding={0}
      className="gridList"
    >
      {books.map((book) => (
        <GridTile
          className="gridTile"
          key={book.id}
          id={book.id}
          title={toTitleCase(book.title)}
          subtitle={<span>by <b>{book.author}</b></span>}
          actionIcon={<FlatButton label="Edit" hoverColor="transparent" primary={true} onClick={() =>
            editBook(book)}/>}
        >
          <img src={book.coverUrl} className="bookImage"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  editBook: PropTypes.func.isRequired,
  toTitleCase: PropTypes.func.isRequired
};

export default BooksList;
