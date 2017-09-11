import React, { Component } from "react";
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import './editBookStyle.scss';

class DeleteButton extends Component {

  constructor(props) {
    super(props);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
    this.state = {
      shouldDelete: false
    };
  }

  cancelDelete() {
    this.setState({shouldDelete: false});
  }

  deleteConfirmation() {
    const {deleteBook} = this.props;
    const {shouldDelete} = this.state;
    if(shouldDelete){
        deleteBook();
    } else {
      this.setState({shouldDelete: true});
    }

  }

  render() {
    const {shouldDelete} = this.state;
    if(shouldDelete) {
      return (
        <div className="deleteBtnContainer">
          <p>Are you sure you want to delete this book?</p>
          <FlatButton className="yesNoBtns" labelStyle={{paddingLeft: 0}} label="Yes" hoverColor="transparent" secondary={true} onClick={this.deleteConfirmation}/>
          <FlatButton className="yesNoBtns" labelStyle={{paddingLeft: 0}} label="No" hoverColor="transparent" primary={true} onClick={this.cancelDelete}/>
        </div>
      );
    } else {
      return (
        <div>
          <FlatButton labelStyle={{paddingLeft: 0}} label="DELETE BOOK" hoverColor="transparent" secondary={true} onClick={this.deleteConfirmation}/>
        </div>
      );
    }

  }
}

DeleteButton.propTypes = {
  deleteBook: PropTypes.func.isRequired
};

export default DeleteButton;
