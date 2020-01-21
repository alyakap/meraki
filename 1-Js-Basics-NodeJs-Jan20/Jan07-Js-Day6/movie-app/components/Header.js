class Header {
    constructor(holder, headerTitle) {
        this.holder = holder;
        this.headerTitle = headerTitle;
        this.generateHtml();
    }
    generateHtml() {
        this.holder.insertAdjacentHTML("beforeEnd", `<h1>${this.headerTitle}</h1>`);
    }
}



const header = function (holder, headerTitle) {
    return new Header(holder, headerTitle)
}
export default header;

