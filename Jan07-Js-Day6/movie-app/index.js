import header from './components/Header'
import form from './components/Form'
const app = document.getElementById('app');
const movies = [];

//inject our header
header(app, "MovieSearcher");

//inject our form
// instead of new Form(app) => we use just form() because form was exported and not the class
form(app, movies)

//movieList(movies)


// for now we will just store the movies in an array. That array is IMMUTABLE
// wich means that it will always keep its same position in memory
// so we can pass it to whatever component and that component can read or use it...

document.querySelector('body').addEventListener('click', function () {
    console.log(movies);
})