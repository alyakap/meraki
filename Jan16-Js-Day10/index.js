import './style.css'
import Circle from './components/Circle';

const app = document.getElementById('app');

//const cir1 = new Circle(app)


app.addEventListener('click', () => {
    //console.log("body clicked");
    new Circle(app);
    
})


app.addEventListener('keydown', function(e) {
    switch(e.code){
        case "KeyR":
            app.style.backgroundColor="#DA2B27";
            break;
        case "KeyG": 
            app.style.backgroundColor="#8DEE9B";
            break;
        case "KeyB":
            app.style.backgroundColor="#82D4FD";
            break;
    } 
  });

