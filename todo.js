var ul = document.getElementById('list');
var li;

//localStorage.setItem('tirth', 'Bharatiya');


var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var clearButton = document.getElementById('clearAll');

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItem)


function addItem() {
    var newTodo = document.getElementById('input');
    var newTodoText = newTodo.value;
    var textNode = document.createTextNode(newTodoText);
    ul = document.getElementById('list');
    
    if(newTodoText === ''){
        return false;
    } else{
        //add into local storage
        localStorage.setItem(newTodoText, 'todo');
        
        // <li class="mycheck"><input type="checkbox" id="check"><label> textNode </label></li>

        li = document.createElement('li');
        var checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        var label = document.createElement('label');


        //add this item on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(()=>{
            li.className = 'mycheck';
        }, 2)

        newTodo.value = '';
    }
}

function removeItem(){
    li = ul.children

    for (let index = 0; index < li.length; index++){
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
            
            //remove from the local storage
            localStorage.removeItem(li[index]);
        }    
    }
}

function clearItem() {
    //clear local storage
    localStorage.clear();
    
    li = ul.children
    
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index]);
        } 
    }
}