function changeText() {
    const title = document.getElementById('main-title');
    title.textContent = "You just changed the title text!";
}

function changeStyle() {
    const desc = document.getElementById('description');
    desc.style.color = 'red';
    desc.style.fontWeight = 'bold';
    desc.style.backgroundColor = '#ffeeba';
    desc.style.padding = '10px';
}

function addItem() {
    const ul = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = "New Item " + (ul.children.length + 1);
    ul.appendChild(newItem);
}

function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.children.length > 0) {
        ul.removeChild(ul.lastElementChild);
    } else {
        alert("No more items to remove!");
    }
}
