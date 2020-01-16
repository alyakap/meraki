import randomcolor from 'randomcolor';
import Dialog from './Dialog';

export default class Circle {
    constructor(holder, width = 100, height = 100) {
        this.holder = holder;
        this.width = width;
        this.height = height;
        this.cirRef = this.init(); // initialHTML
        this.setupStyling(); // Styling
        this.boundOnClickHandler = this.onClickHandler.bind(this)
        this.addNewCircle();
    }

    init() {
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="circle"></div>`);
        return this.holder.lastChild;
    }
    setupStyling() {
        this.cirRef.style.width = this.width + 'px';
        this.cirRef.style.height = this.height + 'px';
        this.cirRef.style.left = '50%';
        this.cirRef.style.top = "50%";
        this.cirRef.style.backgroundColor = "black"
        this.cirRef.style.margin = `${-(this.height/2)}px 0px 0px ${-(this.width/2)}px`  //t r b l
    }
    addNewCircle() {
        this.cirRef.addEventListener('click', this.boundOnClickHandler)
    }
    onClickHandler(e) {
        e.stopPropagation(); //stop parent's(body) element click event
        let size=this.getRandomRange(50,200)
        this.cirRef.style.left =`${this.getRandomRange(0 , this.holder.offsetWidth)}px`;
        this.cirRef.style.top = `${this.getRandomRange(0 , this.holder.offsetHeight)}px`;
        this.cirRef.style.width = size + 'px';
        this.cirRef.style.height = size + 'px';
        this.cirRef.style.backgroundColor=randomcolor();
        if(e.metaKey){
            console.log("ctrl click")
            new Dialog(this.holder)

        } 
    }
    getRandomRange(min , max){
        return Math.floor((Math.random()* (max+1-min))+min); 
    }

    // setUpEvents() {

    //     this.recRef.addEventListener('click', this.boundOnClickHandler);

    // }

    // onClickHandler(mouseObject) {
    //     console.log(this.getSurface())
    // }

}