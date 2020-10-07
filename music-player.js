var html = `<div class="container resizers">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<header>
  <div class="playlist">
    <i class="fa fa-bars"></i>
  </div>
  <div class="setting">
    <i class="fa fa-cog"></i>
  </div>
</header>
<main>
  <div class="album-art">
    <img src="https://upload.wikimedia.org/wikipedia/en/0/00/TheVines_WinningDays.jpg" alt="" />
  </div>
  <div class="player">
    <i class="fa fa-repeat"></i>
    <i class="fa fa-fast-backward"></i>
    <i class="fa fa-play"></i>
    <i class="fa fa-fast-forward"></i>
    <i class="fa fa-random"></i>
  </div>
</main>
<footer>
  <div class="title">The Vines - Ride
  </div>
  <div class="time-tracker">
    <div class="timer">
      <div class="bg">
      </div>
    </div>
    <div class="time">00:80</div>
  </div>
</footer>
</div>
<div class='resizer top-left'></div>
<div class='resizer top-right'></div> 
<div class='resizer bottom-left'></div>
<div class='resizer bottom-right'></div>
`;

var styles = `
  .container {
    width: 500px;
    height: 360px;
    background: #111;
    box-shadow: 0 30px 20px -20px #000;
    box-sizing: border-box;
  }
  header {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    clear: both;
    box-sizing: border-box;
  }
  header .playlist {
    float: left;
    cursor: pointer;
  }
  header .setting {
    float: right;
    cursor: pointer;
  }
  main {
    clear: both;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
  main .album-art {
    float: left;
    padding: 0.5rem;
    background: #000;
  }
  main .album-art img {
    width: 160px;
    border-radius: 8px;
    box-sizing: border-box;
  }
  main .player {
    position: relative;
    float: right;
    width: 176px;
    height: 176px;
    background: -webkit-gradient(linear, left bottom, left top, from(#222), to(#111));
    background: linear-gradient(0deg, #222, #111);
    border-radius: 100%;
    border: solid 2px #000;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 4px 2px rgba(0, 0, 0, 0.2);
  }
  main .player .fa {
    font-size: 1.2rem;
    position: absolute;
    cursor: pointer;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  main .player .fa:hover {
    color: cyan;
    text-shadow: 0 0 4px cyan;
  }
  main .player .fa.fa-play {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: 88px;
    height: 88px;
    border: solid 2px #000;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 0 8px rgba(0, 0, 0, 0.6);
    border-radius: 100%;
    line-height: 88px;
    text-align: center;
    background: -webkit-gradient(linear, left bottom, left top, from(#111), to(#222));
    background: linear-gradient(0deg, #111, #222);
  }
  main .player .fa.fa-repeat {
    top: 8%;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  main .player .fa.fa-fast-backward {
    top: 50%;
    left: 8%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }
  main .player .fa.fa-fast-forward {
    top: 50%;
    left: 82%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }
  main .player .fa.fa-random {
    top: 82%;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  footer {
    clear: both;
    padding: 2rem 2rem;
    color: #999;
    text-shadow: 2px 2px #111;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  footer .title {
    text-align: center;
    padding-bottom: 0.5rem;
  }
  footer .time-tracker {
    border-top: solid 1px #000;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    padding-top: 0.5rem;
    box-sizing: border-box;
  }
  footer .time-tracker .timer {
    position: relative;
    float: left;
    width: 90%;
    height: 2rem;
    cursor: pointer;
  }
  footer .time-tracker .timer .bg {
    position: relative;
    top: 50%;
    margin-right: 0.5rem;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    height: 0.6rem;
    border-top: solid 1px #000;
    border-radius: 10px;
    background: none;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
    overflow: hidden;
    box-sizing: border-box;
  }
  footer .time-tracker .timer .bg:before {
    content: "";
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    position: absolute;
    height: 0.2rem;
    border-radius: 10px;
    width: 10%;
    background: cyan;
    box-shadow: 0 0 2px 2px cyan;
  }
  footer .time-tracker .time {
    float: left;
    width: 10%;
    line-height: 2rem;
  }
  .draggable{
    top:0;
    right:0;
  }

  .resizable .resizers{
    width: 100%;
    height: 100%;
    border: 3px solid #4286f4;
    box-sizing: border-box;
  }
  
  .resizable .resizers .resizer{
    width: 10px;
    height: 10px;
    border-radius: 50%; /*magic to turn square into circle*/
    background: white;
    border: 3px solid #4286f4;
    position: absolute;
  }
  
  .resizable .resizers .resizer.top-left {
    left: -5px;
    top: -5px;
    cursor: nwse-resize; /*resizer cursor*/
  }
  .resizable .resizers .resizer.top-right {
    right: -5px;
    top: -5px;
    cursor: nesw-resize;
  }
  .resizable .resizers .resizer.bottom-left {
    left: -5px;
    bottom: -5px;
    cursor: nesw-resize;
  }
  .resizable .resizers .resizer.bottom-right {
    right: -5px;
    bottom: -5px;
    cursor: nwse-resize;
  }


  `;


window.onload = function (e) {
    init();
}

let now_playing, track_art, track_name, track_artist, playpause_btn, next_btn, prev_btn, seek_slider, volume_slider, curr_time, total_duration, track_index, isPlaying, updateTimer;
let curr_track, track_list;

function init() {

    var div = document.createElement('div');

    div.setAttribute("id", "draggable");
    div.setAttribute("class", "draggable resizable");
    div.style.position = "absolute";

    div.innerHTML = html
    document.body.appendChild(div)


    var style = document.createElement('style');
    style.innerHTML = styles;

    document.body.appendChild(style)

    // Drag
    var draggableElements = document.getElementsByClassName("draggable");

    for (var i = 0; i < draggableElements.length; i++) {
        dragElement(draggableElements[i]);
    }

    makeResizableDiv(".resizable");


    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = parseInt(e.clientX);
            pos4 = parseInt(e.clientY);
            console.log(pos3, pos4)
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


          /*Make resizable div by Hung Nguyen*/
  function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + ' .resizer');
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function (e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })

      function resize(e) {
        if (currentResizer.classList.contains('bottom-right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px';
          }
          if (height > minimum_size) {
            element.style.height = height + 'px';
          }
        } else if (currentResizer.classList.contains('bottom-left')) {
          const height = original_height + (e.pageY - original_mouse_y)
          const width = original_width - (e.pageX - original_mouse_x)
          if (height > minimum_size) {
            element.style.height = height + 'px';
          }
          if (width > minimum_size) {
            element.style.width = width + 'px';
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
          }
        } else if (currentResizer.classList.contains('top-right')) {
          const width = original_width + (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px';
          }
          if (height > minimum_size) {
            element.style.height = height + 'px';
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
          }
        } else {
          const width = original_width - (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px';
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
          }
          if (height > minimum_size) {
            element.style.height = height + 'px';
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
          }
        }
      }

      function stopResize() {
        window.removeEventListener('mousemove', resize);
      }
    }
  }
    }
}