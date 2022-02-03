
// Create buttons: black & white, random colors, nice colors.
const bwBtn = document.createElement('button');
bwBtn.textContent = 'B & W';

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random';

const niceBtn = document.createElement('button');
niceBtn.textContent = 'Nice';

// Query .buttons bottom and append buttons.
const btnsTop = document.querySelector('.top');
btnsTop.appendChild(bwBtn);
btnsTop.appendChild(randomBtn);
btnsTop.appendChild(niceBtn);

// Set colorMode, depending on button event listeners.
let colorMode = '';
let defaultSize = 25;
// Create random hex color, color with lighter hue.
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
let randomNiceColor = (() => {
    "use strict";
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

// Enable mousover on grid, condition enables colorMode var to set colorMode.
let paint = () => {
    let cells = document.querySelectorAll('.grid-cell');
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

// Make grid based on equal width and height entered into range slider, default 20px.
const makeGrid = (size) => {
    let gridBox = document.querySelector('.grid-box');  
    let densityDisplay = document.querySelector('.left');
    gridBox.innerHTML = null;
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
          
    for (let i = 0; i < size * size; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridBox.appendChild(gridCell);
    }; 
    densityDisplay.innerHTML = `<p>Density:&emsp;${size}</p>`;
    paint(); 
};

// Get value from range slider input for grid size
document.querySelector('input').value = defaultSize;
let slider = document.querySelector('input');
slider.addEventListener('change', () => {
    let sliderInput = document.querySelector('input').value;    
    makeGrid(sliderInput);
});

// Clear button to start with fresh grid.
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
// Query .buttons bottom and append buttons.
const btnsBtm = document.querySelector('.bottom');
btnsBtm.appendChild(clearBtn);

// Function to clear grid by removing class that sets background color.
const clearGrid = () => {
    let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.setAttribute('style', 'background-color: #eeeee');
    });
};

// Function to clear button style 
const clearButtons = () => {
    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
};


bwBtn.addEventListener('click', () => {   
    bwBtn.classList.add('active');
    randomBtn.classList.remove('active');
    niceBtn.classList.remove('active');
    colorMode = 'bw';
    paint();
});

randomBtn.addEventListener('click', () => {  
    randomBtn.classList.add('active');
    bwBtn.classList.remove('active');
    niceBtn.classList.remove('active');  
    colorMode = 'random'
    paint();
});

niceBtn.addEventListener('click', () => {   
    niceBtn.classList.add('active');
    bwBtn.classList.remove('active');
    randomBtn.classList.remove('active');
    colorMode = 'nice'
    paint();
});

clearBtn.addEventListener('click', () => {
    clearGrid();
    clearButtons();
});

//Load defaults 25x25 grid on start
window.onload = makeGrid(defaultSize);

