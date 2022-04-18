const BOARD_SIZE = 8;
const WHITE_TYPE = 'white_rotated';
const DARK_TYPE = 'dark';
let selectedCell;

function addImage(cell, type, name) {
  const image = document.createElement('img');
  image.src = 'images/' + type + '/' + name + '.png';
  cell.appendChild(image);
}

function addImageByIndex(cell, type, index) {
  if (index === 0 || index === 7) {
    addImage(cell, type, 'rook');
  } else if (index === 1 || index === 6) {
    addImage(cell, type, 'knight');
  } else if (index === 2 || index === 5) {
    addImage(cell, type, 'bishop');
  } else if (index === 3) {
    addImage(cell, type, 'king');
  } else if (index === 4) {
    addImage(cell, type, 'queen');
  }
}

function onCellClick (event){
    if(selectedCell !== undefined) {
        selectedCell.classList.remove('selected');
    }
    selectedCell = event.currentTarget;
    selectedCell.classList.add('selected');
    }
     

function createChessBoard() {
    const cols = {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H"}
  const table1 = document.createElement('table');
  table1.className = "board";
  document.body.appendChild(table1);
  for (let i = 0; i < BOARD_SIZE; i++) {
    // let row = table1.insertRow();
    let row = document.createElement('tr');
    table1.appendChild(row);
    row.dataset.line = i+1;
    for (let j = 0; j < BOARD_SIZE; j++) {
    //   let cell = row.insertCell();
    let cell = document.createElement('td');
      cell.dataset.col = cols[j+1];
      cell.dataset.line = i;
      row.appendChild(cell);
      cell.id = "cell-" + i.toString() + "_" + j.toString();
      if ((i + j) % 2 === 0) {
        cell.className = 'light-cell';
      } else {
        cell.className = 'dark-cell';
      }
      cell.addEventListener('click', onCellClick);

      if (i === 0) {
        addImageByIndex(cell, WHITE_TYPE, j);
      } else if (i === 1) {
        addImage(cell, WHITE_TYPE, 'pawn');
      } else if (i === 6) {
        addImage(cell, DARK_TYPE, 'pawn');
      } else if (i === 7) {
        addImageByIndex(cell, DARK_TYPE, j);
      }
    }
  } 
}
window.addEventListener('load', createChessBoard);

