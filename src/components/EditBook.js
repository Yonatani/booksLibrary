import React, { Component } from "react";
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class EditBook extends Component {

  constructor(props) {
    super(props);
    this.editBookDetail = this.editBookDetail.bind(this)
  }

  editBookDetail(value, key) {
    this.setState({[key]: value})
  }


  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <TextField
            hintText="Author"
            onChange={(event, value) => this.editBookDetail(value, 'author')}
          /><br />
          <br />
          <TextField
            hintText="Title"
          /><br />
          <br />
          <TextField
            hintText="Cover"
          /><br />
          <br />
          <DatePicker hintText="Date" container="inline" />
        </div>
        <div style={{padding: 20}}>
          <img src="http://cdn.playbuzz.com/cdn/62530326-1b72-4685-b59b-85bae109fa36/5f076c45-61b6-469f-ab63-cd2f0be7db26.jpg" style={{width: '100%'}}/>
          <br />
        </div>
      </div>
    );
  }
}

EditBook.propTypes = {
  text: PropTypes.string.isRequired
};

export default EditBook;
