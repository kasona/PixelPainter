//////==========div id = control - clear button =============////

var clear_but = document.createElement('button');
clear_but.style.background = 'white';
clear_but.style.width = '60px';
clear_but.style.height = '60px';
clear_but.appendChild(document.createTextNode('CLEAR'));
clear_but.addEventListener('click', function() {
    location.reload();
  });

var remove = document.getElementById('controls');
remove.appendChild(clear_but);
