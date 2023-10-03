const gridContainer = document.querySelector('.container');
const reset = document.querySelector('.reset');
const changeSqares = document.querySelector('.change-squares');
function renderGrid(size){
    gridContainer.innerHTML = ''
    for(let i=0; i<size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<size; j++){
            const col = document.createElement('div');
            col.classList.add('node');
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    gridContainer.addEventListener('mouseover', function (event){
        if (event.target.classList.contains('node')){
            event.target.classList.add('hovered')
        }
    });
}
reset.addEventListener('click', function(event){
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.classList.remove('hovered');
    })
});
changeSqares.addEventListener('click', function(event){
    squaresPerSide = window.prompt("Enter Number of Squares Per Side.");
    renderGrid(squaresPerSide);
});

renderGrid(16);