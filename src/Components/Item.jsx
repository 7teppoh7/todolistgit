import React from 'react';
import Styles from './Item.module.css'

function deleteItem(event, prop){
    let idToDel = prop.id;
    let items = JSON.parse(localStorage.getItem('values'));
    let newItemArray = [];
    for (let i = 0; i < items.length; i++){
        if (items[i].id !== idToDel) newItemArray.push(items[i]);
    }
    localStorage.removeItem('values');
    localStorage.setItem('values', JSON.stringify(newItemArray));
    prop.update(JSON.parse(localStorage.getItem('values')));
}

function updateState(event, prop){
    let idToUpd = prop.id;
    let items = JSON.parse(localStorage.getItem('values'));
    for (let i = 0; i < items.length; i++){
        if (items[i].id === idToUpd) items[i].isDone = !items[i].isDone
    }
    localStorage.removeItem('values');
    localStorage.setItem('values', JSON.stringify(items));
    prop.update(JSON.parse(localStorage.getItem('values')));
}

function Item(prop){
    return(
        <div className={Styles.myDiv}>
            <p className={`${Styles.myItem} ${prop.style} `} onClick={e => updateState(e, prop)} >{prop.value}</p>
            <p className={Styles.delete} onClick={e => deleteItem(e, prop)}>delete</p>
        </div>
    )
}

export default Item;

