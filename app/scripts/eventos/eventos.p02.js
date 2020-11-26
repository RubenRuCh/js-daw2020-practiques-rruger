// First we gonna modify capa1
var capa1 = document.querySelector('#capa1');

// Make capa1 draggable
capa1.setAttribute('draggable', 'true');

// When capa1 is dragged, opacity = 50% and transfer it's id to check later
capa1.addEventListener('dragstart', (event) => {
  capa1.style.opacity = 0.5;
  event.dataTransfer.setData('idDraggedElement', event.target.id);
});

// When we release capa1, set it's opacity to it's original state
capa1.addEventListener('dragend', (event) => {
  capa1.style.opacity = 1;
});

// Finally, we gonna modify capa2
var capa2 = document.querySelector('#capa2');

// When an element is getting dragged over capa2, print it's background red
capa2.addEventListener('dragenter', (event) => {
  capa2.style.backgroundColor = 'red';
});

// When the dragged element goes out of capa2, remove the red color
capa2.addEventListener('dragleave', (event) => {
  capa2.style.backgroundColor = 'transparent';
});

// Avoid the default action so we can introduce our own way of dealing with the drop event
capa2.addEventListener('dragover', (event) => {
  event.preventDefault();
});

/* When we drop something onto capa2 and confirm that it's capa1 (we can't assume it), 
we delete it, then put some text in capa2 and pint it with yellow background */
capa2.addEventListener('drop', (event) => {
  let idDraggedElement = event.dataTransfer.getData('idDraggedElement');

  if (idDraggedElement == 'capa1') {
    let draggedElement = document.querySelector(`#${idDraggedElement}`);
    draggedElement.parentNode.removeChild(draggedElement);
    capa2.textContent = '¡Lo has logrado!';
    capa2.style.backgroundColor = 'yellow';
  }
});
