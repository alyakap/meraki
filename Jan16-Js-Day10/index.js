import './style.css'
import Circle from './components/Circle';

const app = document.getElementById('app');

//const cir1 = new Circle(app)


app.addEventListener('click', () => {
    //console.log("body clicked");
    new Circle(app);
    
})