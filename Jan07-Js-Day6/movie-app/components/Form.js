import axios from 'axios'
import Pagination from './Pagination';

class Form {
    constructor(holder, moviesObj, list) {
        this.list = list;
        this.holder = holder;
        this.formElement = this.generateHtml();
        this.moviesObj = moviesObj;
        this.setUpEvents();
    }
    generateHtml() {
        this.holder.insertAdjacentHTML("beforeEnd", `
            <form>
                <input class="searchField" type='text' />
                <input type='submit'>
            </form>`);
        return this.holder.querySelector('form')
    }
    setUpEvents() {
        // we use an arrow function here so that the this doesnt get binded to a new object
        // when we use a normal function as an eventhandler the this inside that function will be bind to the element
        // where the eventlistener is added to
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault() //do not execute the default behaviour of sending data to the action of the form
            const searchStr = this.formElement.querySelector('.searchField').value;
            this.moviesObj.searchStr = searchStr
            this.getMovies(searchStr)
        })
    }
    getMovies(str) {
        //http://www.omdbapi.com/?s=wars&apikey=2e3b4604
        axios.get(`http://www.omdbapi.com?s=${str}&apikey=2e3b4604`)
            .then(res => {
                this.moviesObj.movies.length = 0;
                this.moviesObj.total = parseInt(res.data.totalResults)
                res.data.Search.forEach(movie => this.moviesObj.movies.push(movie))
                this.list.render(true)
            })
    }
}

const form = function (holder, moviesObj, list) {
    return new Form(holder, moviesObj, list)
}
export default form;


// or smaller version
// export default (holder, movies) => new Form(holder, movies)