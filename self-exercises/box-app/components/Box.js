class Box {
    constructor(holder,size){
        this.holder=holder;
        this.size=size;
        this.generateHTML();
        this.setupStyling();
    }
    generateHTML(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="box" style="background-color: coral;"> BOX </div>`);
        this.boxRef = this.holder.querySelector('div')
        
        
    }
    setupStyling(){
        this.boxRef.style.width = this.size+ 'px';
        this.boxRef.style.height = this.size+ 'px';
    }

}
 export default (holder,size) => new Box (holder,size)




