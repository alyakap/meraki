class Box {
    constructor(holder,size){
        this.holder=holder;
        this.size=size;
        this.generateHtml();
    }
    generateHTML(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div>${this.size}</div>`);
    }

}
 export default (holder,size) => new Box (holder,size)




