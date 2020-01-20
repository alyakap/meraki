import MovieListItem from './MovieListItem'
import Pagination from './Pagination'
class MovieList {
    constructor(holder, moviesObj) {
        this.moviesObj = moviesObj;
        this.holder = holder;
    }
    generateHTML() {
        this.holder.insertAdjacentHTML('beforeEnd', `<ul></ul>`)
        this.listRef = this.holder.querySelector('ul')
    }
    //when a new search is performed
    render(shouldRenewPaginator) {
        this.listRef.innerHTML = "";
        this.moviesObj.movies.forEach(movie => {
            new MovieListItem(this.listRef, movie)
        });
        if (shouldRenewPaginator) {
            if (this.paginator) {
                console.log('previous paginator found so we will remove it')
                //if a previous paginator was initialised then we should remove it from the DOM
                this.paginator.paginationDivRef.remove()
            }
            this.paginator = new Pagination(this, this.holder, this.moviesObj)
        }
    }
}

export default (holder, moviesObj) => new MovieList(holder, moviesObj)