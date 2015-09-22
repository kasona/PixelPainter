//////==========div id = control - erase button =============////

var erase_but = document.createElement('button');
erase_but.style.background = 'white';
erase_but.style.width = '60px';
erase_but.style.height = '60px';
erase_but.appendChild(document.createTextNode('ERASE'));
erase_but.addEventListener('click', function() {
    colorSelected = 'white';
  });

var remove = document.getElementById('controls');
remove.appendChild(erase_but);

