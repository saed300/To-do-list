
var inputField = document.getElementById('inputField');
var addToDo = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function() {
  var paragraph = document.createElement('p');
  toDoContainer.appendChild(paragraph);
  paragraph.textContent = inputField.value;
  paragraph.classList.add('paragraph-styling');
  inputField.style.border = '1px solid green';
  inputField.value = '';
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through'
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
})

