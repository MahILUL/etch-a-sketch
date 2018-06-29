let rowsNumber = 16;
let rainbow = false;



const createGrid = (rowsNumber) => {
const parent = document.getElementById('parent');



for (let i = 0; i < rowsNumber; i++) {

  for (let j = 0; j < rowsNumber; j++) {

   let grid = document.createElement('div');

   grid.className = "grid";

   grid.setAttribute('style', 'width: ' + (100/rowsNumber) + '%; height: ' + (100/rowsNumber) + '%');

   parent.appendChild(grid);

   grid.addEventListener('mouseover', function(){

   if (rainbow) {

   grid.style.backgroundColor =randomColor();

   }

   else {

   this.style.backgroundColor = 'black';

   let opacity = this.style.opacity;

   let nextOpacity = Number(opacity) + 0.1;

   this.style.opacity = nextOpacity;


   }
   });

  }

}

}


createGrid(16);

const resetGrid = () => {

document.getElementById('parent').innerHTML = '';

rowsNumber = prompt("How many cells per side?");

createGrid(rowsNumber);



}


const changeColor = () => {

   rainbow = !rainbow;

}


function randomColor() {

   let r = Math.floor(Math.random() * 256);

   let g = Math.floor(Math.random() * 256);

   let b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`;

}
