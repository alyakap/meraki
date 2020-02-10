import React from 'react'
//const Movie = (props) => <li>{props.movieObj.Title}<img alt="" src={props.movieObj.Poster} /></li>
//const Movie = ({movieObj}) => <li>{movieObj.Title}<img alt="" src={movieObj.Poster} /></li>
const Movie = ({ movieObj: { Title, Poster } }) => <li>{Title}<br /><img src={Poster} alt="" /></li>
export default Movie;