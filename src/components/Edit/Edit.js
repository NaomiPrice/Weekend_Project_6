import React, { Component } from 'react';
import {connect} from 'react-redux';


class Edit extends Component {

  state = {
    newTitle: '',
    newDescription: '',
    movieId: this.props.match.params.id
  }
  componentDidMount = ()=>{
    this.getDetails();
  }

  getDetails = ()=>{
    this.props.dispatch({ type: 'GET_ONE_MOVIE', payload: this.props.match.params.id })
  }


  handleChange = (propertyName, event)=>{
    //update local state as user inputs changes
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleSave = ()=>{
    //save updates made
    this.props.dispatch({type: 'UPDATE_MOVIE', payload: this.state})
    //step back to details page
    this.props.history.goBack();
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
        <label> Update Movie Title: 
          <input type="text" value={this.state.newTitle} 
                 onChange={(event)=>{this.handleChange('newTitle', event)}}></input>
        </label>
        <br></br>
        <label>Update Movie Description: 
          <input type="text" value={this.state.newDescription} 
                 onChange={(event)=>{this.handleChange('newDescription', event)}}></input>
        </label>
          
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Edit);