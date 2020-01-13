import './style.css'

import drawingZone from './components/DrawingZone';
import Rectangle from './components/Rectangle';


const app = document.getElementById('app');

const zone1 = drawingZone(app, 600, 600, 100, 100);
//zone1.changeSize(600, 300);

//console.log(zone1);

const rec1 = new Rectangle(zone1, 100, 100, 100, 100)
const rec2 = new Rectangle(zone1, 100, 100, 300, 300)

//rec1.changeSize(300, 90)
console.log(rec1.isValid());


console.log(Rectangle.getSumOfSurfaces([rec1, rec2]))






