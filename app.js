document.addEventListener("DOMContentLoaded", function(event) {
  console.log('Document loaded and ready.');
// targets for makeGrid function
  const gridHeight = document.getElementById('inputHeight');
  const gridWidth = document.getElementById('inputWidth');
  const canvas = document.getElementById('board-container');
  const colorValue = document.getElementById('color-picker');
// event Listener target
  const form = document.getElementById('ui-container');
// targets for painting and clear grid functions

  const $tr = document.getElementsByTagName('tr');
  const eraseAll = document.getElementById('eraser');
// event listener to create canvas grid
  form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementsByTagName('tr').remove;
      makeGrid();
      clearAll();
  })

  function clearAll() {
    eraseAll.addEventListener('click', () => {
      let cells = document.getElementsByClassName('pixel');
      for (i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '#ffffff';
      };
    });
  };




// function to create grid
  function makeGrid(e) {

    canvas.innerHTML = '';

    // console.log(canvas);

    for (var i = 0; i < gridHeight.value; i++) {
      let row = canvas.appendChild(document.createElement('tr'));
      row.classList.add('row');
      canvas.append(row);

      for (var j = 0; j < gridWidth.value; j++) {
        let pixels = row.appendChild(document.createElement('td'));
        pixels.classList.add('pixel');
        pixels.innerHTML;
      };
    };
    let brush = false;
    let $td = document.getElementsByTagName('td');

      for (var i = 0; i < $td.length; i++) {
        $td[i].addEventListener('mousedown', (e) => {
          brush = true;
          if (brush) {
          e.target.style.backgroundColor = colorValue.value;
          }
            // e.target.style.backgroundColor = colorValue.value;
            for (var i = 0; i < $td.length; i++) {
              $td[i].addEventListener('mousemove', (e) => {
                if (brush) {
                e.target.style.backgroundColor = colorValue.value;
                }
                // e.target.style.backgroundColor = colorValue.value;
              });
            };
        });
      };
      for (var i = 0; i < $td.length; i++) {
        $td[i].addEventListener('mouseup', () => {
          brush = false;
        });
      };
  };


});
