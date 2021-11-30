import './TaskItem.css'

export default function TaskItem({item: todoText, deleteThisTask}) {
    function deleteThisItem(){
        // console.log('In TaskItem Counter:',todoText);
        deleteThisTask(todoText);
    }
    return (
        <div className="task-list" key={todoText}>
            <div class="text-left">{todoText}</div>
            <div className="icon-right" onClick={deleteThisItem}>&#x2612;</div>
        </div>
    )
}
