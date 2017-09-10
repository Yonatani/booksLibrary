import React, { Component } from "react";
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class EditBook extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {author, title, coverUrl, date, editBook} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <TextField
            hintText="Author"
            value={author}
            onChange={(event, value) => editBook(value, 'author')}
          /><br />
          <br />
          <TextField
            hintText="Title"
            value={title}
            onChange={(event, value) => editBook(value, 'title')}
          /><br />
          <br />
          <TextField
            hintText="Cover"
            value={coverUrl}
            onChange={(event, value) => editBook(value, 'coverUrl')}
          /><br />
          <br />
          <DatePicker hintText="Date" container="inline" value={date} onChange={(event, value) => editBook(value, 'date')}/>
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
