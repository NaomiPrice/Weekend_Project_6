import React, { Component } from 'react';


class MovieItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      
      <div className="MovieItem">
        <img src={this.props.movie.poster} alt={this.props.movie.title}></img>
        <h2>{this.props.movie.title}</h2>
      </div>
      
    );
  }
}

export default MovieItem;