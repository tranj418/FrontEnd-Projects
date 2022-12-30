let addBtn = document.getElementById('myBtn');
let taskContainer = document.getElementById('tasks');
let inputField = document.getElementById('taskInput');

addBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    taskContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', function(){
        taskContainer.removeChild(paragraph);
    })
})