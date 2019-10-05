import React, { Component } from 'react';
import {connect} from 'react-redux';


class Details extends Component {
    componentDidMount = ()=>{
        this.ID();
    }

    ID = ()=>{
        console.log(this.props.match.params.id);
        //server call to get details for only this movie
        this.props.dispatch({ type: 'GET_ONE_MOVIE', payload: this.props.match.params.id })
    }

    

  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="Details">
        <p>Details Page</p>
        <button>GO BACK</button>
        <button>EDIT</button>
        <p>{}</p>
        {JSON.stringify(this.props.reduxState.thisMovie)}
       
      </div>
      
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Details);