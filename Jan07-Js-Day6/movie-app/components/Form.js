import axios from 'axios'

class Form {
    constructor(holder, movies) {
        this.holder = holder;
        this.formElement = this.generateHtml();
        this.movies = movies;
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
            this.getMovies(searchStr)
        })
    }
    getMovies(str) {
        //http://www.omdbapi.com/?s=wars&apikey=2e3b4604
        axios.get(`http://www.omdbapi.com?s=${str}&apikey=2e3b4604`)
            .then(res => {
                this.movies.length = 0;
                res.data.Search.forEach(movie => this.movies.push(movie))
            })

    }
}

const form = function (holder, movies) {
    return new Form(holder, movies)
}
export default form;