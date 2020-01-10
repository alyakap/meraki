import drawingZone from './components/DrawingZone';
import rectangle from './components/Rectangle';

const app = document.getElementById('app');

const zone1=drawingZone(app);


zone1.changeSize(150, 150);

//console.log(zone1);

const rec1=rectangle(zone1)

console.log(rec1.isValid());




