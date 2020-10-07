// IFFE for scoping
(function () {

    let html = `
    <div class="resizers">
        <div id="widget-content">
            <!-- =========================

                Widget HTML code start

            ============================ -->
            <div class="titlebar" style="cursor: grab;" >
                To do
            </div>

            <div id="tasks" >
            </div>
            <br/>
            <!-- =========================

                Widget HTML ends here

            ============================ -->
        </div>
        <div class='resizer top-left'></div>
        <div class='resizer top-right'></div> 
        <div class='resizer bottom-left'></div>
        <div class='resizer bottom-right'></div>
    </div>`;

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
    .titlebar {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));
        background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
        background: linear-gradient(top, #ebebeb, #d5d5d5);
        color: #4d494d;
        font-size: 11pt;
        line-height: 20px;
        text-align: center;
        width: 100%;
        height: 20px;
        border-top: 1px solid #f3f1f3;
        border-bottom: 1px solid #b1aeb1;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        cursor: default;
      }
      
      .buttons {
        padding-left: 8px;
        padding-top: 3px;
        float: left;
        line-height: 0px;
      }
      
      .buttons:hover a {
        visibility: visible;
      }
      
      .close {
        background: #ff5c5c;
        font-size: 9pt;
        width: 11px;
        height: 11px;
        border: 1px solid #e33e41;
        border-radius: 50%;
        display: inline-block;
        cursor:pointer;
        line-height:11px;
        text-align:center;
        margin-left:3px;
      }
      
      .close:hover {
        background: #c14645;
        border: 1px solid #b03537;
      }
            
      .zoom {
        background: #00ca56;
        font-size: 9pt;
        line-height: 11px;
        margin-left: 6px;
        width: 11px;
        height: 11px;
        border: 1px solid #14ae46;
        border-radius: 50%;
        display: inline-block;
        cursor:pointer
      }
      
      .zoom:hover {
        background: #029740;
        border: 1px solid #128435;
      }
      
      .content {
        padding: 10px;
      }

      #widget-content{
        background: #fff;
        width: 100%;
        height: 100%;
        border: 1px solid #acacac;
        border-radius: 6px;
        box-shadow: 0px 0px 20px #acacac;
      }
      #task-input{
        width:70%;
      }
    `;

    // not use window.onload as it will override other mehtods instead adding new listner
    window.addEventListener('load', function () {

        // Create container div and append it to body
        var container = document.createElement('div');
        container.setAttribute("class", "draggable");
        container.setAttribute("id", "maulik-widget");
        container.innerHTML = html;
        document.body.appendChild(container);

        var style = document.createElement('style');
        style.innerHTML = styles;
        document.body.appendChild(style);
        
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
        let taskElem = document.getElementById("tasks"); 

        let tasks = localStorage.getItem('tasks');
        tasks = tasks? JSON.parse(tasks): [];

        let taskHTML = "<div id='task-list'>"; 
        let i = 0;

        function renderTasks(){
          let updatedTasks = '';
          for(i = 0; i< tasks.length; i++){
            updatedTasks += `
              <div class="item" >
                <a onmousedown="(function(e){ e.stopPropagation();})(event)"  onmouseup="(function(e){ e.stopPropagation();})(event)" 
                class="zoom" id="task-`+i+`" >&#10003;</a> <span class="item-name" >`+ tasks[i]['name'] +`</span>
              </div>  
            `
          }
          document.getElementById("task-list").innerHTML = updatedTasks;
        }

        for(i = 0; i< tasks.length; i++){
            taskHTML += `
              <div class="item" >
                <a onmousedown="(function(e){ e.stopPropagation();})(event)"  onmouseup="(function(e){ e.stopPropagation();})(event)" 
                class="zoom" id="task-`+i+`" >&#10003;</a> <span class="item-name" >`+ tasks[i]["name"] +`</span>
              </div>  
            `
          }
          taskHTML += "</div>";
                  
          taskHTML += `<div class="item" >
                          <input onmousedown="(function(e){ e.stopPropagation();})(event)" 
                          onmouseup="(function(e){ e.stopPropagation();})(event)" 
                          type="text" id="task-input" /> 
                          <button id="add-btn" >Add</button>
                        </div>`      
          taskElem.innerHTML = taskHTML;

          document.getElementById("task-list").onclick =  function(e){
            tasks.splice(e.target.id.replace('task-',''), 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
         };
    
          document.getElementById("add-btn").addEventListener('click', function(){
            let name = document.getElementById('task-input').value;
            if(!name || name == ''){ return; }
            tasks.push({"name":name});
            renderTasks();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            document.getElementById('task-input').value = "";
          });

        // ============== Widget code ends ======================

        // make element movable and resizable
        dragElement(container);
        makeResizableDiv('#maulik-widget');
    });
})();