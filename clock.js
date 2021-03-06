// IFFE for scoping
(function () {

    let html = `
    <div class="resizers">
        <div id="widget-content">
        <!-- =========================

                Widget HTML code

            ============================ -->
            <div class="clock">
  <div class="clock__second"></div>
  <div class="clock__minute"></div>
    <div class="clock__hour"></div>
  <div class="clock__axis"></div>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
</div>
        </div>
        <div class='resizer top-left'></div>
        <div class='resizer top-right'></div> 
        <div class='resizer bottom-left'></div>
        <div class='resizer bottom-right'></div>
    </div>
    `;

    let styles = `
    /* ======= style for movement ======== */
    .draggable{
        position:absolute;
        left:70%;
        top:0;
    }

    /* ======= style for resizable ======= */
    .resizers{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
      
    .resizers .resizer{
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: white;
      border: 3px solid #4286f4;
      position: absolute;
    }
    
    .resizers .resizer.top-left {
      left: -5px;
      top: -5px;
      cursor: nwse-resize; /*resizer cursor*/
    }
    .resizers .resizer.top-right {
      right: -5px;
      top: -5px;
      cursor: nesw-resize;
    }
    .resizers .resizer.bottom-left {
      left: -5px;
      bottom: -5px;
      cursor: nesw-resize;
    }
    .resizers .resizer.bottom-right {
      right: -5px;
      bottom: -5px;
      cursor: nwse-resize;
    }
    /* =======  widget styles ========= */
    p {
        color: #f4eed7;
        font-size: 0.8em;
        opacity: 0.75;
      }
      
      .clock {
        height: 200px;
        width: 200px;
        border-radius: 100px;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
                justify-content: center;
        position: relative;
      }
      .clock__second, .clock__minute, .clock__hour, .clock__indicator {
        position: absolute;
        left: calc(50% - 1px);
        width: 2px;
        background: #f4eed7;
        -webkit-transform-origin: bottom center;
                transform-origin: bottom center;
        z-index: 2;
        border-radius: 1px;
      }
      .clock__second {
        height: 90px;
        margin-top: 10px;
        background: #4b9aaa;
        -webkit-animation: time 60s infinite steps(60);
                animation: time 60s infinite steps(60);
        z-index: 3;
      }
      .clock__minute {
        height: 80px;
        margin-top: 20px;
        opacity: 0.75;
        -webkit-animation: time 3600s linear infinite;
                animation: time 3600s linear infinite;
      }
      .clock__hour {
        height: 60px;
        margin-top: 40px;
        -webkit-animation: time 43200s linear infinite;
                animation: time 43200s linear infinite;
      }
      .clock__indicator {
        height: 98px;
        border-top: 2px solid #4b9aaa;
        background: none;
      }
      .clock__indicator:nth-of-type(5n) {
        opacity: 1;
        height: 93px;
        border-top: 7px solid #f4eed7;
      }
      .clock__axis {
        background: #4b9aaa;
        width: 5px;
        height: 5px;
        border-radius: 3px;
        position: absolute;
        z-index: 4;
        top: 97px;
      }
      
      section:nth-of-type(1) {
        -webkit-transform: rotateZ(calc(6deg * 1));
                transform: rotateZ(calc(6deg * 1));
      }
      
      section:nth-of-type(2) {
        -webkit-transform: rotateZ(calc(6deg * 2));
                transform: rotateZ(calc(6deg * 2));
      }
      
      section:nth-of-type(3) {
        -webkit-transform: rotateZ(calc(6deg * 3));
                transform: rotateZ(calc(6deg * 3));
      }
      
      section:nth-of-type(4) {
        -webkit-transform: rotateZ(calc(6deg * 4));
                transform: rotateZ(calc(6deg * 4));
      }
      
      section:nth-of-type(5) {
        -webkit-transform: rotateZ(calc(6deg * 5));
                transform: rotateZ(calc(6deg * 5));
      }
      
      section:nth-of-type(6) {
        -webkit-transform: rotateZ(calc(6deg * 6));
                transform: rotateZ(calc(6deg * 6));
      }
      
      section:nth-of-type(7) {
        -webkit-transform: rotateZ(calc(6deg * 7));
                transform: rotateZ(calc(6deg * 7));
      }
      
      section:nth-of-type(8) {
        -webkit-transform: rotateZ(calc(6deg * 8));
                transform: rotateZ(calc(6deg * 8));
      }
      
      section:nth-of-type(9) {
        -webkit-transform: rotateZ(calc(6deg * 9));
                transform: rotateZ(calc(6deg * 9));
      }
      
      section:nth-of-type(10) {
        -webkit-transform: rotateZ(calc(6deg * 10));
                transform: rotateZ(calc(6deg * 10));
      }
      
      section:nth-of-type(11) {
        -webkit-transform: rotateZ(calc(6deg * 11));
                transform: rotateZ(calc(6deg * 11));
      }
      
      section:nth-of-type(12) {
        -webkit-transform: rotateZ(calc(6deg * 12));
                transform: rotateZ(calc(6deg * 12));
      }
      
      section:nth-of-type(13) {
        -webkit-transform: rotateZ(calc(6deg * 13));
                transform: rotateZ(calc(6deg * 13));
      }
      
      section:nth-of-type(14) {
        -webkit-transform: rotateZ(calc(6deg * 14));
                transform: rotateZ(calc(6deg * 14));
      }
      
      section:nth-of-type(15) {
        -webkit-transform: rotateZ(calc(6deg * 15));
                transform: rotateZ(calc(6deg * 15));
      }
      
      section:nth-of-type(16) {
        -webkit-transform: rotateZ(calc(6deg * 16));
                transform: rotateZ(calc(6deg * 16));
      }
      
      section:nth-of-type(17) {
        -webkit-transform: rotateZ(calc(6deg * 17));
                transform: rotateZ(calc(6deg * 17));
      }
      
      section:nth-of-type(18) {
        -webkit-transform: rotateZ(calc(6deg * 18));
                transform: rotateZ(calc(6deg * 18));
      }
      
      section:nth-of-type(19) {
        -webkit-transform: rotateZ(calc(6deg * 19));
                transform: rotateZ(calc(6deg * 19));
      }
      
      section:nth-of-type(20) {
        -webkit-transform: rotateZ(calc(6deg * 20));
                transform: rotateZ(calc(6deg * 20));
      }
      
      section:nth-of-type(21) {
        -webkit-transform: rotateZ(calc(6deg * 21));
                transform: rotateZ(calc(6deg * 21));
      }
      
      section:nth-of-type(22) {
        -webkit-transform: rotateZ(calc(6deg * 22));
                transform: rotateZ(calc(6deg * 22));
      }
      
      section:nth-of-type(23) {
        -webkit-transform: rotateZ(calc(6deg * 23));
                transform: rotateZ(calc(6deg * 23));
      }
      
      section:nth-of-type(24) {
        -webkit-transform: rotateZ(calc(6deg * 24));
                transform: rotateZ(calc(6deg * 24));
      }
      
      section:nth-of-type(25) {
        -webkit-transform: rotateZ(calc(6deg * 25));
                transform: rotateZ(calc(6deg * 25));
      }
      
      section:nth-of-type(26) {
        -webkit-transform: rotateZ(calc(6deg * 26));
                transform: rotateZ(calc(6deg * 26));
      }
      
      section:nth-of-type(27) {
        -webkit-transform: rotateZ(calc(6deg * 27));
                transform: rotateZ(calc(6deg * 27));
      }
      
      section:nth-of-type(28) {
        -webkit-transform: rotateZ(calc(6deg * 28));
                transform: rotateZ(calc(6deg * 28));
      }
      
      section:nth-of-type(29) {
        -webkit-transform: rotateZ(calc(6deg * 29));
                transform: rotateZ(calc(6deg * 29));
      }
      
      section:nth-of-type(30) {
        -webkit-transform: rotateZ(calc(6deg * 30));
                transform: rotateZ(calc(6deg * 30));
      }
      
      section:nth-of-type(31) {
        -webkit-transform: rotateZ(calc(6deg * 31));
                transform: rotateZ(calc(6deg * 31));
      }
      
      section:nth-of-type(32) {
        -webkit-transform: rotateZ(calc(6deg * 32));
                transform: rotateZ(calc(6deg * 32));
      }
      
      section:nth-of-type(33) {
        -webkit-transform: rotateZ(calc(6deg * 33));
                transform: rotateZ(calc(6deg * 33));
      }
      
      section:nth-of-type(34) {
        -webkit-transform: rotateZ(calc(6deg * 34));
                transform: rotateZ(calc(6deg * 34));
      }
      
      section:nth-of-type(35) {
        -webkit-transform: rotateZ(calc(6deg * 35));
                transform: rotateZ(calc(6deg * 35));
      }
      
      section:nth-of-type(36) {
        -webkit-transform: rotateZ(calc(6deg * 36));
                transform: rotateZ(calc(6deg * 36));
      }
      
      section:nth-of-type(37) {
        -webkit-transform: rotateZ(calc(6deg * 37));
                transform: rotateZ(calc(6deg * 37));
      }
      
      section:nth-of-type(38) {
        -webkit-transform: rotateZ(calc(6deg * 38));
                transform: rotateZ(calc(6deg * 38));
      }
      
      section:nth-of-type(39) {
        -webkit-transform: rotateZ(calc(6deg * 39));
                transform: rotateZ(calc(6deg * 39));
      }
      
      section:nth-of-type(40) {
        -webkit-transform: rotateZ(calc(6deg * 40));
                transform: rotateZ(calc(6deg * 40));
      }
      
      section:nth-of-type(41) {
        -webkit-transform: rotateZ(calc(6deg * 41));
                transform: rotateZ(calc(6deg * 41));
      }
      
      section:nth-of-type(42) {
        -webkit-transform: rotateZ(calc(6deg * 42));
                transform: rotateZ(calc(6deg * 42));
      }
      
      section:nth-of-type(43) {
        -webkit-transform: rotateZ(calc(6deg * 43));
                transform: rotateZ(calc(6deg * 43));
      }
      
      section:nth-of-type(44) {
        -webkit-transform: rotateZ(calc(6deg * 44));
                transform: rotateZ(calc(6deg * 44));
      }
      
      section:nth-of-type(45) {
        -webkit-transform: rotateZ(calc(6deg * 45));
                transform: rotateZ(calc(6deg * 45));
      }
      
      section:nth-of-type(46) {
        -webkit-transform: rotateZ(calc(6deg * 46));
                transform: rotateZ(calc(6deg * 46));
      }
      
      section:nth-of-type(47) {
        -webkit-transform: rotateZ(calc(6deg * 47));
                transform: rotateZ(calc(6deg * 47));
      }
      
      section:nth-of-type(48) {
        -webkit-transform: rotateZ(calc(6deg * 48));
                transform: rotateZ(calc(6deg * 48));
      }
      
      section:nth-of-type(49) {
        -webkit-transform: rotateZ(calc(6deg * 49));
                transform: rotateZ(calc(6deg * 49));
      }
      
      section:nth-of-type(50) {
        -webkit-transform: rotateZ(calc(6deg * 50));
                transform: rotateZ(calc(6deg * 50));
      }
      
      section:nth-of-type(51) {
        -webkit-transform: rotateZ(calc(6deg * 51));
                transform: rotateZ(calc(6deg * 51));
      }
      
      section:nth-of-type(52) {
        -webkit-transform: rotateZ(calc(6deg * 52));
                transform: rotateZ(calc(6deg * 52));
      }
      
      section:nth-of-type(53) {
        -webkit-transform: rotateZ(calc(6deg * 53));
                transform: rotateZ(calc(6deg * 53));
      }
      
      section:nth-of-type(54) {
        -webkit-transform: rotateZ(calc(6deg * 54));
                transform: rotateZ(calc(6deg * 54));
      }
      
      section:nth-of-type(55) {
        -webkit-transform: rotateZ(calc(6deg * 55));
                transform: rotateZ(calc(6deg * 55));
      }
      
      section:nth-of-type(56) {
        -webkit-transform: rotateZ(calc(6deg * 56));
                transform: rotateZ(calc(6deg * 56));
      }
      
      section:nth-of-type(57) {
        -webkit-transform: rotateZ(calc(6deg * 57));
                transform: rotateZ(calc(6deg * 57));
      }
      
      section:nth-of-type(58) {
        -webkit-transform: rotateZ(calc(6deg * 58));
                transform: rotateZ(calc(6deg * 58));
      }
      
      section:nth-of-type(59) {
        -webkit-transform: rotateZ(calc(6deg * 59));
                transform: rotateZ(calc(6deg * 59));
      }
      
      section:nth-of-type(60) {
        -webkit-transform: rotateZ(calc(6deg * 60));
                transform: rotateZ(calc(6deg * 60));
      }
      
      @-webkit-keyframes time {
        to {
          -webkit-transform: rotateZ(360deg);
                  transform: rotateZ(360deg);
        }
      }
      
      @keyframes time {
        to {
          -webkit-transform: rotateZ(360deg);
                  transform: rotateZ(360deg);
        }
      }  
    `;

    // not use window.onload as it will override other mehtods instead adding new listner
    window.addEventListener('load', function () {

        // Create container div and append it to body
        var container = document.createElement('div');
        container.setAttribute("class", "draggable");
        container.setAttribute("id", "maulik-widget");
        container.innerHTML = html
        document.body.appendChild(container)

        var style = document.createElement('style');
        style.innerHTML = styles;
        document.body.appendChild(style)

        // Code to make the div resizable
        function makeResizableDiv(div) {
            const element = document.querySelector(div);
            const resizers = document.querySelectorAll(div + ' .resizer');
            const minimum_size = 20;
            let original_width = 0,original_height = 0,original_x = 0,original_y = 0,original_mouse_x = 0,original_mouse_y = 0;
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
        
        // Code to make the div movable
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            document.getElementById("widget-content").onmousedown = dragMouseDown;
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
        
        }

        // ============== Widget code ======================
        var currentSec = getSecondsToday();

        var seconds = (currentSec / 60) % 1;
        var minutes = (currentSec / 3600) % 1;
        var hours = (currentSec / 43200) % 1;

        setTime(60 * seconds, "second");
        setTime(3600 * minutes, "minute");
        setTime(43200 * hours, "hour");

        function setTime(left, hand) {
        document.querySelectorAll(".clock__" + hand).forEach(function(item){
            item.style.animationDelay = "" + left * -1 + "s"
        });
        }

        function getSecondsToday() {
        let now = new Date();

        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let diff = now - today; 
            return Math.round(diff / 1000);
        }

        // ============== Widget ends ======================


        // make element movable and resizable
        dragElement(container);
        makeResizableDiv('#maulik-widget');
    });
})();