

export default class Dialog {
    constructor(holder) {
      this.holder=holder;
      this.modalRef = this.diaInit();
      this.setupStyling();
      //this.clickYes=this.handleClickYes.bind(this)
      //this.clickNo=this.handleClickNo.bind(this)
    }
    diaInit(){
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
        let buttonYes=this.modalRef.querySelector(".yes")
        buttonYes.addEventListener('click', (e)=>{
            e.stopPropagation(); 
            this.holder.removeChild(this.holder.querySelector(".circle"))
            this.holder.removeChild(this.holder.lastChild)
        })
        let buttonNo=this.modalRef.querySelector(".no")
        buttonNo.addEventListener('click', (e)=>{
            e.stopPropagation(); 
            this.holder.removeChild(this.holder.lastChild)
        } )

    }
    // handleClickYes(e) {
    //     console.log("yes clicked")
    // }
    // handleClickNo() {
    //     console.log("no clicked")
    // }
  
  }