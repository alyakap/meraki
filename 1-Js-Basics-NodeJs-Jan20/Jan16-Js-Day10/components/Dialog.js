export default class Dialog {
    constructor(holder, onConfirm) {
        this.holder = holder;
        this.onConfirm = onConfirm;
        this.clickYes = this.handleClickYes.bind(this)
        this.clickNo = this.handleClickNo.bind(this)
        this.modalRef = this.diaInit();
        this.setupStyling();
    }
    diaInit() {
        this.holder.insertAdjacentHTML('beforeEnd', `<div class="dialogModal"></div>`);
        return this.holder.lastChild;
    }

    setupStyling() {
        this.modalRef.style.width = "600px";
        this.modalRef.style.height = "400px";
        this.modalRef.style.left = '50%';
        this.modalRef.style.top = "50%";
        this.modalRef.style.backgroundColor = "rgba(50, 115, 220, 0.3)"
        this.modalRef.style.margin = `-200px 0px 0px -300px`  //t r b l
        this.modalRef.style.zIndex = "5"
        this.modalRef.insertAdjacentHTML('beforeEnd', `<p class="question">You want to erase the circle?</p>`);
        this.modalRef.insertAdjacentHTML('beforeEnd', `<button class="yes">Yes</button>`);
        this.modalRef.insertAdjacentHTML('beforeEnd', `<button class="no">No</button>`);
        let buttonYes = this.modalRef.querySelector(".yes")
        buttonYes.addEventListener('click', this.clickYes)
        let buttonNo = this.modalRef.querySelector(".no")
        buttonNo.addEventListener('click', this.clickNo)

    }
    handleClickYes(e) {
        e.stopPropagation();
        this.onConfirm()
        this.holder.removeChild(this.modalRef)
    }
    handleClickNo(e) {
        e.stopPropagation();
        this.holder.removeChild(this.modalRef)
    }

}


// 1) arrow-function as EventHandler 
//        => easy because this is not re-binded. It is still pointing to the instanceof. So 'this' is the same in whole my class.

// 2) if we use normal function(){} as eventHandler 
//        => if we use 'this' in this function we have a problem. Why? because 'this' refers to the element where the event was hooked on
//        => solution =>    function(){}.bind(this)


// 3 ) refer to a functionHanlder 
// domElement.addEventListener('click',someFunctionToExecuteWhenClicked) but that function will have the 'this' wrongly binded
// it will reder to domElement so we need to domElement.addEventListener('click',someFunctionToExecuteWhenClicked.bind(this))


// 4) bind in constructor
        //this.boundedFunction = someFunctionToExecuteWhenClicked.bind(this)
        //make sure that you 'constructor bind' your eventHandlers before any method execution