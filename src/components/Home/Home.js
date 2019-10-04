import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem'
import {connect} from 'react-redux';


class Home extends Component {
    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = ()=>{
        this.props.dispatch({ type: 'GET_MOVIES'});
    }

  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="Home">
        <p>Home screen</p>
        map through each movie item from redux store to display on DOM
        {this.props.reduxState.movies.map((movie)=>{
            return <MovieItem key={movie.id} movie={movie}/>
        })}
       
      </div>
      
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);