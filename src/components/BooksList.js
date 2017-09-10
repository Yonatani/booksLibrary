import React from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
    justifyContent: 'space-between',

  },
};

const BooksList = ({ books, editBook, toTitleCase }) => (
  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={180}
      padding={0}
      style={styles.gridList}
    >
      {books.map((book) => (
        <GridTile
          style={{marginTop: 5, padding: 0}}
          key={book.id}
          title={toTitleCase(book.title)}
          subtitle={<span>by <b>{book.author}</b></span>}
          actionIcon={<FlatButton label="Edit" hoverColor="transparent" primary={true} onClick={() =>
            editBook(book)}/>}
        >
          <img src={book.coverUrl} style={{padding: 0, margin: 0}}/>
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
