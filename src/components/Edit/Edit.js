import React, { Component } from 'react';


class Edit extends Component {

  state = {
    updateTitle: null,
    updateDescription: null
  }
  handleChange = (propertyName, event)=>{
    //update local state as user inputs changes
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleSave = ()=>{
    //save updates made
    console.log('save button clicked')
  }

  goBack = ()=>{
    //navagate back to previous page
    this.props.history.goBack();
}

  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="Edit">
        <p>Edit Page</p>
        <button onClick={this.goBack}>CANCEL</button>
        <button onClick={this.handleSave}>SAVE CHANGES</button>
        <br></br>
        <label>Movie Title: </label>
          <input type="text" onChange={(event)=>{this.handleChange('updateTitle', event)}}></input>
        <br></br>
        <label>Movie Description: </label>
          <input type="text" onChange={(event)=>{this.handleChange('updateDescription', event)}}></input>
      </div>
    );
  }
}

export default Edit;