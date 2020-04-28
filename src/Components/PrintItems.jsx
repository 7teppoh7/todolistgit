import React from 'react';
import Item from './Item';

function PrintItems(props){
    return (
        props.items.map(item => <Item value={item.value} id={item.id} update={props.update}/>)
    )
}

export default PrintItems;