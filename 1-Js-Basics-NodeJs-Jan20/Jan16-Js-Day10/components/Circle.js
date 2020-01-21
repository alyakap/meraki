import randomcolor from 'randomcolor';
//import Dialog from './Dialog';
import { confirm } from 'vanilla-dialogs'

export default class Circle {
    constructor(holder, width = 100, height = 100) {
        this.holder = holder;
        this.width = width;
        this.height = height;
        this.boundOnClickHandler = this.onClickHandler.bind(this)
        this.cirRef = this.init(); // initialHTML
        this.setupStyling(); // Styling
        this.addNewCircle();
    }

    init() {
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="circle"></div>`);
        return this.holder.lastChild;
    }
    setupStyling() {

        // const styleObject = {
        //     position: `absolute`,
        //     top: `${this.y}px`,
        //     left: `${this.x}px`,
        //     width: `${this.size}px`,
        //     height: `${this.size}px`,
        //     marginLeft: `-${this.size / 2}px`,
        //     marginTop: `-${this.size / 2}px`,
        //     borderRadius: `50%`,
        //     backgroundColor: `${this.bgc}`,
        //     cursor: `pointer`
        // }

        // Object.assign(this.htmlRef.style, styleObject);

        this.cirRef.style.width = this.width + 'px';
        this.cirRef.style.height = this.height + 'px';
        this.cirRef.style.left = '50%';
        this.cirRef.style.top = "50%";
        this.cirRef.style.backgroundColor = "black"
        this.cirRef.style.margin = `${-(this.height / 2)}px 0px 0px ${-(this.width / 2)}px`  //t r b l
    }
    addNewCircle() {
        this.cirRef.addEventListener('click', this.boundOnClickHandler)
    }
    onClickHandler(e) {
        e.stopPropagation(); //stop parent's(body) element click event
        let size = this.getRandomRange(50, 200)
        this.width = size;
        this.height = size;
        // this.cirRef.style.margin = `${-(this.height / 2)}px 0px 0px ${-(this.width / 2)}px`

        // this.cirRef.style.width = size + 'px';
        // this.cirRef.style.height = size + 'px';
        this.setupStyling()
        this.cirRef.style.left = `${this.getRandomRange(this.width / 2, window.innerWidth - this.width / 2)}px`;
        this.cirRef.style.top = `${this.getRandomRange(this.height / 2, window.innerHeight - this.height / 2)}px`;
        this.cirRef.style.backgroundColor = randomcolor();
        if (e.altKey) {
            console.log("alt click")
            // new Dialog(this.holder, this.onConfirm.bind(this))
            confirm('You want to erase the circle?').then(result => {
                if (result) {
                    this.onConfirm()
                }
            })
        }
    }
    getRandomRange(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    onConfirm() {
        console.log(this)
        this.holder.removeChild(this.cirRef)
    }
    // setUpEvents() {

    //     this.recRef.addEventListener('click', this.boundOnClickHandler);

    // }

    // onClickHandler(mouseObject) {
    //     console.log(this.getSurface())
    // }

}