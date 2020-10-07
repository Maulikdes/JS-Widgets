styles = `
.clock {
  border-radius: 100%;
  background: #ffffff;
  font-family: "Montserrat";
  border: 5px solid white;
  box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
}

.wrap {
  overflow: hidden;
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 100%;
  cursor: move;
}

.minute,
.hour {
  position: absolute;
  height: 100px;
  width: 6px;
  margin: auto;
  top: -27%;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  transform-origin: bottom center;
  transform: rotate(0deg);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.minute {
  position: absolute;
  height: 130px;
  width: 4px;
  top: -38%;
  left: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  transform: rotate(90deg);
}

.second {
  position: absolute;
  height: 90px;
  width: 2px;
  margin: auto;
  top: -26%;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  background: #FF4B3E;
  transform-origin: bottom center;
  transform: rotate(180deg);
  z-index: 1;
}

.dot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 12px;
  height: 12px;
  border-radius: 100px;
  background: white;
  border: 2px solid #1b1b1b;
  border-radius: 100px;
  margin: auto;
  z-index: 1;
}
`;

html =`<div class="clock">
<div class="wrap">
  <span class="hour"></span>
  <span class="minute"></span>
  <span class="second"></span>
  <span class="dot"></span>
</div>
</div>`

window.addEventListener('load', function(){

    var div = document.createElement('div');    
    div.style.position = "absolute";

    div.innerHTML = html
    document.body.appendChild(div)

    var style = document.createElement('style');
    style.innerHTML = styles;
    document.body.appendChild(style)

var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

dragElement(div);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        console.log(pos3,pos4)
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

});