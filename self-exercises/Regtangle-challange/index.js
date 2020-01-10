import drawingZone from './components/DrawingZone';
//import regtangle from './components/Regtangle';

const app = document.getElementById('app');

const zone1=drawingZone(app);

console.log(zone1.zoneRef)

zone1.changeSize(500, 100);