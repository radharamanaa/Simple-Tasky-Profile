import './todo-page.css';
import React from 'react';
import Entry from '../atoms/Entry';
import TaskItem from '../Molecules/TaskItem'
import Explanation from '../Molecules/Explanation';

export default function TodoApplPage(){
    let [todos, setTodoList] = React.useState([]);
    
    function deleteAnItem(itemNo){
        let arr = todos.filter(function(item){
            return item !== itemNo;
        })
        setTodoList(arr);
    }
    const text = "This is a Todo List implemented in React which utilizes React States, uses lists to store the todos."+
    " Duplicate Todos are not allowed."
    +
    " This design is also responsive, uses media queries and flexbox wrap efficiently.";
    function appendToList(item){
        if(todos.find(todo => {
            return item === todo;
        }) !== undefined){
            alert('List item is a duplicate');
            return;
        }
        // console.log(item,' in appendToList');
           setTodoList([...todos,item]);
    }
    return (
        <React.Fragment>
            <Explanation text={text}/>
            <div className='input-wrapper'>
                <Entry placeHolder="Enter your Task" addTask={appendToList}/>
                {todos.map((item) => {
                    return <TaskItem item={item} key={item} deleteThisTask={deleteAnItem}/>
                })}
            </div>
        </React.Fragment>
    )
}
