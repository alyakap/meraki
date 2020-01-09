import axios from "axios";

class Pagination {
    constructor(list, holder, moviesObj) {
        this.holder = holder;
        this.list = list
        this.moviesObj = moviesObj
        this.page = 0
        this.total = moviesObj.total;
        this.nrOfMovies = moviesObj.movies.length;
        this.totalPages = Math.ceil(this.total / 10);
        this.paginationDivRef = this.render()
        this.setUpEvents()
    }
    next() {
        this.page += 1
        axios.get(`http://www.omdbapi.com?s=${this.moviesObj.searchStr}&apikey=2e3b4604&page=${this.page}`)
            .then(res => {
                //empty array of movies
                this.moviesObj.movies.length = 0;
                res.data.Search.forEach(movie => this.moviesObj.movies.push(movie))
                this.list.render(false)
            })
            .catch(console.log)
    }
    prev() {
        this.page -= 1
    }
    render() {
        this.holder.insertAdjacentHTML('beforeEnd', `
            <div>
                <button class='prev'>Prev</button>
                <span>${(this.page * 10) + 1}</span> -
                <span>${(this.page * 10) + 10}</span> /
                <span>${this.total}</span>
                <button class='next'>Next</button>
            </div>
    `)
        this.prevButton = this.holder.querySelector('button.prev')
        this.nextButton = this.holder.querySelector('button.next')
        return this.holder.querySelector('div')
    }
    setUpEvents() {
        //pass the function do not execute it
        //we pass it so it can be called when needed (on click)
        this.nextButton.addEventListener('click', this.next.bind(this))
    }
}

export default (list, holder, moviesObj) => new Pagination(list, holder, moviesObj)