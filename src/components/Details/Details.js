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

    goBack = ()=>{
        this.props.history.push('/');
    }
    

  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="Details">
        
        <button onClick={this.goBack}>GO BACK</button>
        <button>EDIT</button>
        {/* <p>{JSON.stringify(this.props.reduxState.oneMovie)}</p> */}
        {this.props.reduxState.oneMovie.map(movie => {
            return <div className="movieDiv" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                  </div>
        })}
       
       
      </div>
      
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Details);