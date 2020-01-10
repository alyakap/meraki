class DrawingZone {
    constructor(holder, width='300px', height='200px'){
        this.holder=holder;
        this.width=width;
        this.height=height;
    }

}

export default (holder, width, height)= new DrawingZone(holder, width, height)