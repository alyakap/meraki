import "./reset.css";
import "./style.css"

import uuid from 'uuid/v1'
import randomColor from 'randomcolor'
var h1Ref = document.querySelector('h1');
h1Ref.textContent = uuid();

var h2Ref = document.querySelector('h2');
h2Ref.style.backgroundColor = randomColor();
