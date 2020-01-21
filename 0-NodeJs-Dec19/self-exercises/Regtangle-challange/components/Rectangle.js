
export default class Rectangle {
    constructor(holder, width = 50, height = 50, top = 150, left = 50) {
        this.holder = holder;
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
        // fifth possibility
        this.boundOnClickHandler = this.onClickHandler.bind(this)
        this.recRef = this.init(); // initialHTML
        this.setupStyling(); // Styling
        this.setUpEvents(); //events
    }
    static getSumOfSurfaces(arrOfRectangles) {
        return arrOfRectangles.reduce((acc, rectangleObj) => acc + rectangleObj.getSurface(), 0)
    }
    init() {
        this.holder.zoneRef.insertAdjacentHTML('beforeEnd', `<div class="regtangle"> reg </div>`);
        return this.holder.zoneRef.lastChild;
    }
    setupStyling() {
        this.recRef.style.width = this.width + 'px';
        this.recRef.style.height = this.height + 'px';
        this.recRef.style.left = this.left + 'px';
        this.recRef.style.top = this.top + 'px';
        this.checkProportion();
    }

    setUpEvents() {

        // // first posibility
        // this.recRef.addEventListener('click', function (mouseEvent) {
        //     //in a normal function as handler => this will reference the thing where the event was hooked on
        //     console.log(this.getSurface())
        //     //if we would still keep using the old school function(){} way we need to re-bind my this keyword to the
        //     //execution context of the instance 'this'
        // }.bind(this))

        // // second posibility
        // this.recRef.addEventListener('click', mouseEvent => {
        //     console.log(this.getSurface())
        // })

        //third
        // this.recRef.addEventListener('click', ()=>{
        //     this.onClickHandler()
        // });

        // fourth possibility => 
        // adding handler that we bind 'manually'
        // this.recRef.addEventListener('click', this.onClickHandler.bind(this));

        //    fifth possibility => 
        //     adding handler that we bind 'manually'
        this.recRef.addEventListener('click', this.boundOnClickHandler);

    }

    onClickHandler(mouseObject) {
        console.log(this.getSurface())
    }



    getSurface() {
        return this.width * this.height
    }
    checkProportion() {
        if (this.width == this.height) {
            return this.recRef.style.backgroundColor = "yellow";
        } else {
            return this.recRef.style.backgroundColor = "red";
        }
    }
    isValid() {
        const check1 = this.left >= this.holder.left;
        const check2 = (this.left + this.width) <= (this.holder.left + this.holder.width);
        const check3 = this.top >= this.holder.top;
        const check4 = (this.top + this.height) <= (this.holder.top + this.holder.height);
        console.log(this.left, this.holder.left)
        console.log(check1, check2, check3, check4)
        return check1 && check2 && check3 && check4;
    }
    changeSize(givenWidth, givenHeight) {
        this.recRef.style.width = givenWidth + 'px';
        this.width = givenWidth;
        this.recRef.style.height = givenHeight + 'px';
        this.height = givenHeight;
    }
    checkCoordinateInside(x, y) {
        const check1 = x >= this.left && x <= this.left + this.width;
        const check2 = y >= this.top && y <= this.top + this.height;
        return check1 && check2;
    }
}