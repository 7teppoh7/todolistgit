import React from 'react';
import PrintItems from './PrintItems'
import AddItem from './AddItem'
import PrintItemsDone from './PrintItemsDone'
import Styles from './List.module.css'


class List extends React.Component{

    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        if (localStorage.length === 0){
            localStorage.setItem('values', JSON.stringify([{
                id:0,
                value: 'Open TODO list',
                isDone: false,
            }]));
        }
        let allItems = JSON.parse(localStorage.getItem('values'));
        let tmpDoneArray = [];
        let tmpItemsArray = [];
        for (let i = 0; i < allItems.length; i++){
            allItems[i].isDone? tmpDoneArray.push(allItems[i]): tmpItemsArray.push(allItems[i]);
        }
        this.state = {
            todoItems: tmpItemsArray,
            todoItemsDone: tmpDoneArray,
        };
    }

    update(items){
        let tmpDoneArray = [];
        let tmpItemsArray = [];
        for (let i = 0; i < items.length; i++){
            items[i].isDone? tmpDoneArray.push(items[i]): tmpItemsArray.push(items[i]);
        }
        this.setState({
            todoItems: tmpItemsArray,
            todoItemsDone: tmpDoneArray,
        })
    }

    render(props){
        return (
            <div className={Styles.myList}>
                <div className={Styles.items}>
                    <PrintItems  items = {this.state.todoItems} update={this.update} />
                </div>
                <div className={Styles.items__done}>
                    <PrintItemsDone className={Styles.items__done} items = {this.state.todoItemsDone} update={this.update} />
                </div>
                <AddItem className={Styles.addItems} update={this.update}/>
            </div>
        )
        
    }

}

export default List;