import React from 'react';
import { useHistory } from 'react-router';
import MovieList from './Movie';
import {Link } from 'react-router-dom'

export default function SavedList(props) {

  // const returnHome = () => {
   
  //   history.push('/')
  // }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to='/'>
        <div className="home-button" > Home </div>
      </Link>
    </div>
  );
}
