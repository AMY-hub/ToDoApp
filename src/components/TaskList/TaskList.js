import Task from '../Task/Task';

function TaskList({ list, setList }) {

    const deleteTask = (id) => {
        setList ( list.filter( task => task.id !== id ) )
    };
    const changeParam = (id, param) => {
        setList( list.map( task => {
            return task.id === id? {...task, [param]: !task[param]} : {...task};
        }))
    };
    const listItems = list.map( task => {
        return ( <Task key={task.id} task={task} changeParam={changeParam} deleteTask={deleteTask}/> )
    });

    return( 
        <div>
            <ul className="list">
                {listItems}
            </ul>
        </div>     
     )
}

export default TaskList;