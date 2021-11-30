
import './Entry.css';

export default function Input({placeHolder, addTask}){
    console.log(addTask);
    const insertTask = function(val){
        addTask(val);
    }
    const onSubmitTask = function(e){
        console.log(e.target.value);
        if((e.key === 'Enter'  || e.keyCode === 13) && e.target.value!==''){
            insertTask(e.target.value);
            e.target.value = '';
        }
    }
    return (
        <div className="center-it">
            <input placeholder={placeHolder} onKeyUp={onSubmitTask}/>
        </div>);
}