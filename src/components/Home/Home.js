import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
import {connect} from 'react-redux';


class Home extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="Home">
        <p>Home screen</p>
        map through each movie item from redux store to display on DOM
        {this.props.reduxState.movies.map((movie)=>{
            return <MovieItem movie={movie}/>
        })}
       
      </div>
      
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);