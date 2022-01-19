
let gameBox = document.createElement('div');
gameBox.className = 'console';
gameBox.id = 'console-frame'
gameBox.textContent = 'Etch-A-Sketch';
document.body.append(gameBox);




let gridDiv = document.createElement('div');
    gridDiv.className = 'grid-div';
    gameBox.appendChild(gridDiv);

const createGrid = (width, height) => {
    for (let i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        gridDiv.appendChild(row);        

        for (let j = 0; j < height; j++) {
            let gridBox = document.createElement('div');
            gridBox.className = 'gridbox';
            gridBox.id = 'box' + i + '-' + j;
            row.appendChild(gridBox);
        };        
        
    };    
};

window.onload = createGrid(16, 16);

// Function to allow mouseover, with color black.
let cells = document.querySelectorAll('.gridbox');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('color-black');
    })
});

// Function to clear grid by removing class with background color.
const clearGrid = () => {
    cells.forEach(cell => {
        cell.classList.remove('color-black');
    })
}

// Create button section at the button of console.
const btnDivTop = document.createElement('div');
gameBox.appendChild(btnDivTop);
btnDivTop.className = 'btn top';

const basicBtn = document.createElement('button');
basicBtn.textContent = 'Basic';
basicBtn.className = 'btn-control';
btnDivTop.appendChild(basicBtn);
basicBtn.addEventListener('click', () => {
    gameBox.removeChild('.grid-div');
    createGrid(10, 20);
});

// Clear button to start with fresh grid.
const btnDivBottom = document.createElement('div');
gameBox.appendChild(btnDivBottom);
btnDivBottom.classList = 'btn bottom'

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.className = 'btn-control';
btnDivBottom.appendChild(clearBtn);
clearBtn.addEventListener('click', () => {
    clearGrid();
});