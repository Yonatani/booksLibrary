import React, { Component } from "react";
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import './editBookStyle.scss';
import DeleteButton from './DeleteButton';

class EditBook extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {author, title, coverUrl, date, editBook, id, deleteBook} = this.props;
    return (
      <div className="editBookContainer">
        <div>
          <TextField
            hintText="Author"
            value={author}
            onChange={(event, value) => editBook(value, 'author')}
            errorText={author.length === 0 ? "This field is required" : null}
          /><br />
          <br />
          <TextField
            hintText="Title"
            value={title}
            onChange={(event, value) => editBook(value, 'title')}
            errorText={title.length === 0 ? "This field is required" : null}
          /><br />
          <br />
          <TextField
            hintText="Cover"
            value={coverUrl}
            onChange={(event, value) => editBook(value, 'coverUrl')}
            errorText={coverUrl.length === 0 ? "This field is required" : null}
          /><br />
          <br />
          <DatePicker
            hintText="Date"
            container="inline"
            value={date}
            onChange={(event, value) => editBook(value, 'date')}
            errorText={date instanceof Date ? null : "This field is required"}/>
          {id === -1 ? null : <DeleteButton deleteBook={deleteBook} />}
        </div>
        <div className="imageContainer" >
          <img src={coverUrl}/>
          <br />
        </div>
      </div>
    );
  }
}

EditBook.propTypes = {
  editBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default EditBook;
