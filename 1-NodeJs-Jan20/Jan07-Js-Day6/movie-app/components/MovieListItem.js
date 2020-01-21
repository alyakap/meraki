export default class MovieListItem {
    constructor(holder, movie) {
        this.movie = movie;
        this.holder = holder;
        this.generateHtml()
    }
    generateHtml() {
        this.holder.insertAdjacentHTML('beforeEnd', `
            <li>
                ${this.movie.Title}<br>
                <img src="${this.movie.Poster}" />
            </li>
        `)
    }
}