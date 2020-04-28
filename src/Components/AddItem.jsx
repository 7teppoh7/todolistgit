import React from 'react';
import './AddItem.module.css'

let inputValue = '';
let input;


function addNewItem(event, prop){

    if (inputValue.length !== 0){
        let items = JSON.parse(localStorage.getItem('values'));
        let lastId = items.length === 0 ? -1 : items[0].id
        items.unshift({
            id: lastId + 1,
            value: inputValue,
            isDone: false,
        })
        localStorage.removeItem('values');
        localStorage.setItem('values', JSON.stringify(items));
        prop.update(JSON.parse(localStorage.getItem('values')));
    }
    if (input !== undefined) input.value = '';
    inputValue = '';

}

function handleChange(event) {
    inputValue = event.target.value;
    input = event.target;
}

function AddItem(prop){
    return(
        <div>
            <input type='text' onChange={e => handleChange(e)} placeholder='type here...' id='myInput'/>
            <button onClick={e => addNewItem(e, prop)}>New TODO!</button>
        </div>
    )
}

export default AddItem;