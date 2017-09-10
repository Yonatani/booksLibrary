import React, { Component } from "react";
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class EditBook extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {author, title, coverUrl, date, editBook, id, deleteBook} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
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
            errorText={ date instanceof Date ? null : "This field is required"}/>
          <FlatButton labelStyle={{paddingLeft: 0}} label="DELETE BOOK" hoverColor="transparent" secondary={true} onClick={() =>
            deleteBook(id)}/>
        </div>
        <div style={{padding: 20}}>
          <img src={coverUrl} style={{width: '100%'}}/>
          <br />
        </div>
      </div>
    );
  }
}

EditBook.propTypes = {
  editBook: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default EditBook;
