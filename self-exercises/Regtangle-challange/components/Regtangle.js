
class Regtangle {
    constructor(holder, width="50", height="50", top="150", left="50"){
        this.holder=holder;
        this.width=width ;
        this.height=height;
        this.top=top;
        this.left=left;
        this.regRef=this.generateHtml();
        this.setupStyling();
        this.setPosition();
        this.checkProportion();
    }
    generateHtml(){
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="regtangle" style="position:absolute"> reg </div>`);
        console.log("generate")
        return this.holder.lastChild;
    }
    setupStyling(){
        console.log(this.width)
        this.regRef.style.width = this.width+ 'px';
        this.regRef.style.height = this.height+ 'px';
    }
    setPosition(){
        this.regRef.style.left= this.left+'px';
        this.regRef.style.top = this.top+'px';
    }

    calSurface(){
        return this.width*this.height
    }

    checkProportion(){
        console.log("check")
        if (this.width==this.height) {
            return this.regRef.style.backgroundColor="yellow";
        } else{
            return this.regRef.style.backgroundColor="red";
        }

    }
    
}

export default (holder, width, height, top, left)=> new Regtangle(holder, width, height, top, left)