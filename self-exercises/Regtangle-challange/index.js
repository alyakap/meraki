import drawingZone from './components/DrawingZone';


const app = document.getElementById('app');

const zone1=drawingZone(app);


zone1.changeSize(500, 100);

const reg1=zone1.renderReg(100,200,200,200)

console.log(reg1.calSurface());

