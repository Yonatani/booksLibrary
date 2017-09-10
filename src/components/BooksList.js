import React from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '75%',
    overflowY: 'auto',
  },
};

const BooksList = ({ books, editBook }) => (
  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={180}
      style={styles.gridList}
    >
      {books.map((book) => (
        <GridTile
          key={book.id}
          title={book.title}
          subtitle={<span>by <b>{book.author}</b></span>}
          actionIcon={<FlatButton label="Edit" hoverColor="transparent" primary={true} onClick={() =>
            editBook(book)}/>}
        >
          <img src={book.coverUrl} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  editBook: PropTypes.func.isRequired
}

export default BooksList
