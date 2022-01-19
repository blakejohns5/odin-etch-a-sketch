


let outline = document.createElement('div');
outline.className = 'outline';
outline.id = 'frame'
outline.textContent = 'Etch-A-Sketch';
document.body.append(outline);

const createGrid = (width, height) => {
    let container = document.createElement('div');
    container.className = 'container';
    container.id = 'main';
    outline.appendChild(container);

    for (let i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        container.appendChild(row);
        console.log(row, row.className, row.id);        

        for (let j = 0; j < height; j++) {
            let box = document.createElement('div');
            box.className = 'gridbox';
            row.appendChild(box);
            console.log(box, box.classname);
        };
        
    };
    
};



//     let container = document.createElement('div'));
//     container.className = 'container'
//     container.id = 'main';
//     document.body.appendChild(container);
//     const main = document.querySelector('main');

//     for (let i = 0; i <= 16; i++) {
//         let row = main.appendChild(document.createElement('div'));
//         row.className = 'row';
//         row.id = 'row' + i;

//         for (let j = 0; j < 16; j++) {
//             let box = document.createElement('div');            
//             box.className = 'box';
//             row.appendChild(cell);
//         }
// }


// }


window.onload = createGrid(16, 16);
