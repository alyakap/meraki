
class Rectangle {
    constructor(holder, width="50", height="50", top="150", left="50"){
        this.holder=holder;
        this.width=width ;
        this.height=height;
        this.top=top;
        this.left=left;
        this.recRef=this.generateHtml();
        this.setupStyling();
        this.setPosition();
        this.checkProportion();
    }
    generateHtml(){
        this.holder.zoneRef.insertAdjacentHTML('beforeEnd', `<div class="regtangle" style="position:absolute"> reg </div>`);
        return this.holder.zoneRef.lastChild;
    }
    setupStyling(){
        this.recRef.style.width = this.width+ 'px';
        this.recRef.style.height = this.height+ 'px';
    }
    setPosition(){
        this.recRef.style.left= this.left+'px';
        this.recRef.style.top = this.top+'px';
    }

    calSurface(){
        return this.width*this.height
    }

    checkProportion(){
        if (this.width==this.height) {
            return this.recRef.style.backgroundColor="yellow";
        } else{
            return this.recRef.style.backgroundColor="red";
        }
    }
    isValid(){
        let zoneX=this.holder.zoneRef.offsetLeft+Number(this.holder.width);
        let zoneY=this.holder.zoneRef.offsetTop+Number(this.holder.height);
        let recX=this.recRef.offsetLeft+Number(this.width)+this.holder.zoneRef.offsetLeft;
        let recY=this.recRef.offsetTop+Number(this.top);
        // console.log("recx",recX)
        // console.log("zonex",zoneX)
        // console.log("recY",recY)
        // console.log("zoneY",zoneY)
        // console.log(recX<=zoneX)
        // console.log(recY<=zoneY)
        return ((recX<=zoneX) && (recY<=zoneY));
    }
    changeSize(givenWidth, givenHeight){
        this.recRef.style.width = givenWidth+ 'px';
        this.width=givenWidth;
        this.recRef.style.height = givenHeight+ 'px';
        this.height=givenHeight;
    }

}

export default (holder, width, height, top, left)=> new Rectangle(holder, width, height, top, left)