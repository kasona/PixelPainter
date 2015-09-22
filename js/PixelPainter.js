////////======div id = pixelPainter=========/////////
var colorSelected = 'white';

function oneButton(grid) {
  var white_but = document.createElement('button');
  white_but.style.background = 'white';
  white_but.style.width = '10px';
  white_but.style.height = '10px';
  white_but.appendChild(document.createTextNode(''));
  grid.appendChild(white_but);
  white_but.addEventListener('click', function() {
    this.style.background = colorSelected;
  });
}

function grid(rows, col) {
  var twoDimArr = [];
  var numbers = 0;
  var pixelPainter = document.getElementById('pixelPainter');
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < col; j++) {
      row.push(numbers++);
      oneButton(pixelPainter);


    }
    pixelPainter.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
}
grid(30,30);
