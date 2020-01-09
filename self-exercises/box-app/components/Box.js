import randomcolor from 'randomcolor';

class Box {
    constructor(holder,size, topPos, leftPos){
        this.holder=holder;
        this.size=size;
        this.topPos=topPos;
        this.leftPos=leftPos;
        this.generateHTML();
        this.setupStyling();
        this.setPosition();
    }
    generateHTML(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="box"> BOX </div>`);
        this.boxRef = this.holder.querySelector('div')
        
        
    }
    setupStyling(){
        this.boxRef.style.width = this.size+ 'px';
        this.boxRef.style.height = this.size+ 'px';
    }

    setPosition(){
        this.boxRef.style.left= this.leftPos+'px';
        this.boxRef.style.top = this.topPos+'px';
    }

    setRandomBackgroundColor(){
        this.boxRef.addEventListener('click', () => {
            console.log("clicked")
            this.style.backgroundColor=randomcolor();
        })
        
    }

}
 export default (holder,size,topPos,leftPos) => new Box (holder,size,topPos,leftPos)




