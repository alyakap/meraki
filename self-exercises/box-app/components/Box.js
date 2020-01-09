class Box {
    constructor(holder,size){
        this.holder=holder;
        this.size=size;
        this.generateHTML();
    }
    generateHTML(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div id="box" width="${this.size}" height="${this.size}" style="background-color: coral;"></div>`);
        this.boxRef = this.holder.getElementById('box')
        
    }

}
 export default (holder,size) => new Box (holder,size)




