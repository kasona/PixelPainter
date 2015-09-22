var PixelPainter = require'/PixelPainter';
var clearBut = require'/clearBut';
var eraseBut = requrie'/eraseBut';

///=======div id - color picker ==========////

function colorPickerButton(grid, setColorsInPicker) {
  var color_but = document.createElement('button');
  color_but.style.background = setColorsInPicker;
  color_but.style.width = '25px';
  color_but.style.height = '25px';
  color_but.appendChild(document.createTextNode(''));
  grid.appendChild(color_but);
  color_but.addEventListener('click', function() {
    colorSelected = setColorsInPicker;
  });
}
function colorPickerGrid() {
  var color = [
  ['red', 'orange'],
  ['yellow', 'green'],
  ['blue', 'purple'],
  ['black', 'teal'],
  ['pink', 'brown'],
  ['lime', 'salmon']
  ];

  var twoDimArr = [];
  var rows = 9;
  var col = 2;
  var numbers = 0;
  var colorPicker = document.getElementById('colorPicker');// connecting html and js
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < col; j++) {
      row.push(numbers++);
      var setColorsInPicker = color[i][j];
      colorPickerButton(colorPicker, setColorsInPicker);
    }
    colorPicker.appendChild(document.createElement('br'));
    twoDimArr.push(row);
  }
}
colorPickerGrid();


module.exports = colorPicker;