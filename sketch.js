const gridContainer = document.querySelector('.container');
function renderGrid(size){
    for(let i=0; i<16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<16; j++){
            const col = document.createElement('div');
            col.classList.add('node');
            col.textContent = '' 
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
}
renderGrid();