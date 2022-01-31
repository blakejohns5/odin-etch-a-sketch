
let gameBox = document.createElement('div');
gameBox.className = 'gamebox';
gameBox.id = 'console-frame'
gameBox.textContent = 'Sketch-O-Matic';
document.body.append(gameBox);

let gridDivOuter = document.createElement('div');
gridDivOuter.classList.add('grid-div', 'outer');
gameBox.appendChild(gridDivOuter);

// Declare cells, used in trackMouse() and clearGrid() functions
const cells = document.querySelectorAll('.gridbox');


let randomNiceColor = (() => {
    // "use strict";
  
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    return () => {
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
})();

let colorMode = '';

// Function to allow mouseover, with color black.
let paint = () => {
    let cells = document.querySelectorAll('.gridbox');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (colorMode === 'random') {
                cell.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            } else if (colorMode === 'nice') {
                cell.style.backgroundColor = randomNiceColor(); 
            } else {
                cell.style.backgroundColor = '#797979';
            }
        })
    });
};

// Function to create hexadecimal color code.
let randomColor = Math.floor(Math.random() * 16777215).toString(16);

// Function to create grids, with width and height as
const makeGrid = (width, height) => {
    let gridDivInner = document.createElement('div');
    gridDivInner.classList.add('grid-div', 'inner');
    

    for (let i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        gridDivInner.appendChild(row);

        for (let j = 0; j < height; j++) {
            let gridBox = document.createElement('div');
            gridBox.className = 'gridbox';
            gridBox.id = 'box' + i + '-' + j;
            row.appendChild(gridBox);
        };                
    }; 
    gridDivOuter.appendChild(gridDivInner); 
    paint(); 
     
};

//Load defaults 16x16 grid on start
window.onload = makeGrid(16, 16);

// Function to clear grid by removing class that sets background color.
const clearGrid = () => {
    let cells = document.querySelectorAll('.gridbox');
    cells.forEach(cell => {
        cell.setAttribute('style', 'background-color: #eeeee');
    });
};

// Function removes grid, used before replacing with different grid.
const removeGrid = () => {
    let outerGrid = document.querySelector('.outer');
    let innerGrid = document.querySelector('.inner');
    outerGrid.removeChild(innerGrid);
}

// Create button section at the button of console.
const btnDiv = document.createElement('div');
btnDiv.classList.add('btn-div');
gameBox.appendChild(btnDiv);

// Top buttons
const btnsTop = document.createElement('div');
btnsTop.classList.add('btn-row')
btnDiv.appendChild(btnsTop);

// Buttons inside top buttons div
const basicBtn = document.createElement('button');
basicBtn.textContent = 'Basic';
basicBtn.classList.add('btn');
btnsTop.appendChild(basicBtn);


// Creates portrait-style grid
const portraitBtn = document.createElement('button');
portraitBtn.textContent = 'Portrait';
portraitBtn.classList.add('btn');
btnsTop.appendChild(portraitBtn);

// Creates landscape style grid
const landscapeBtn = document.createElement('button');
landscapeBtn.textContent = 'Landscape';
landscapeBtn.classList.add('btn');
btnsTop.appendChild(landscapeBtn);

// Bottom buttons
const btnsBtm = document.createElement('div');
btnsBtm.classList.add('btn-row');
btnDiv.appendChild(btnsBtm);

// Color mode button / b&w
const bwBtn = document.createElement('button');
bwBtn.textContent = 'B & W';
bwBtn.classList.add('btn');
btnsBtm.appendChild(bwBtn);

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random';
randomBtn.classList.add('btn');
btnsBtm.appendChild(randomBtn);

const niceBtn = document.createElement('button');
niceBtn.textContent = 'Nice';
niceBtn.classList.add('btn');
btnsBtm.appendChild(niceBtn);

// Clear button to start with fresh grid.
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.classList.add('btn');
btnsBtm.appendChild(clearBtn);

// Event Listeners for buttons
basicBtn.addEventListener('click', () => {
    removeGrid();
    makeGrid(16, 16);
});

// Event listeners for buttons on bottom
portraitBtn.addEventListener('click', () => {
    removeGrid();
    makeGrid(26, 30);
});

landscapeBtn.addEventListener('click', () => {
    removeGrid();
    makeGrid(32, 26);
});

bwBtn.addEventListener('click', () => {   
    colorMode = 'bw';
    paint();
});

randomBtn.addEventListener('click', () => {    
    colorMode = 'random'
    paint();
});

niceBtn.addEventListener('click', () => {    
    colorMode = 'nice'
    paint();
});


clearBtn.addEventListener('click', () => {
    clearGrid();
});



