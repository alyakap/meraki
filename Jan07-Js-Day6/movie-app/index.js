import './style.css'

import header from './components/Header'
import form from './components/Form'
import movieList from './components/MovieList'

const app = document.getElementById('app');
const moviesObj = {
    movies: [],
    total: 0,
    searchStr: ""
};

//inject our header
header(app, "MovieSearcher");


const list = movieList(app, moviesObj)

//inject our form
// instead of new Form(app) => we use just form() because form was exported and not the class
form(app, moviesObj, list)

list.generateHTML() // generate moviePlaceholdµer = UL 


// for now we will just store the movies in an array. That array is IMMUTABLE
// wich means that it will always keep its same position in memory
// so we can pass it to whatever component and that component can read or use it...

// document.querySelector('body').addEventListener('click', function () {
//     console.log(movies);
// })