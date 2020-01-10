import randomcolor from 'randomcolor';

class DrawingZone {
    constructor(holder, width="300", height="200", top="100", left="100"){
        this.holder=holder;
        this.width=width ;
        this.height=height;
        this.top=top;
        this.left=left;
        this.zoneRef = this.generateHtml();
        this.setupStyling();
        this.setPosition();
     
    }

    generateHtml(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="zone" style="position:absolute">Drawing zone</div>`);
        return this.holder.lastChild;
    }
    setupStyling(){
        this.zoneRef.style.width = this.width+ 'px';
        this.zoneRef.style.height = this.height+ 'px';
        this.zoneRef.style.backgroundColor=randomcolor();
    }
    setPosition(){
        this.zoneRef.style.left= this.left+'px';
        this.zoneRef.style.top = this.top+'px';
    }
    changeSize(givenWidth, givenHeight){
        this.zoneRef.style.width = givenWidth+ 'px';
        this.width=givenWidth;
        this.zoneRef.style.height = givenHeight+ 'px';
        this.height=givenHeight;
    }


}
export default (holder, width, height, top, left)=> new DrawingZone(holder, width, height, top, left)