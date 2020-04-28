import React from 'react';
import Item from './Item'
import styles from './PrintItemsDone.module.css'

function PrintItems(props){
    return (
        <div className={styles.done}>
            {props.items.map(item => <Item style={styles.items__done} value={item.value} id={item.id} isDone={item.isDone} update={props.update}/>)}
        </div>
    )
}

export default PrintItems;