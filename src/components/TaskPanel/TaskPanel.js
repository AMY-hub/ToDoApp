import { useEffect, useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import TaskList from '../TaskList/TaskList';

import './TaskPanel.scss';

function TaskPanel({list, setList}) {

    const [ editTitle, setEditTitle ] = useState(false);
    const [ title, setTitle ] = useLocalStorage('listTitle', 'Plan for today');
    const [ hasDone, setHasDone ] = useState(false);

    const editInputRef = useRef(null);

    const toggleEditMode = () => setEditTitle( !editTitle );
    const clearCompleted = () => {
        setList( list.filter( task => task.done !== true ) );
    }

    useEffect ( () => {
        const done = list.findIndex( task => task.done );
        if ( done === -1 ) {
            setHasDone(false)
        } else {
            setHasDone(true)
        }
    }, [list] );
    
    useEffect( () => {
        if (editTitle) editInputRef?.current?.focus();
    }, [editTitle] );

    return(
        <div className="taskPanel">
            <div className="taskPanelHeader">
                <button 
                title='Change title'
                className={`editBtn ${editTitle? 'icon-done' : 'icon-edit'}`}
                onClick={toggleEditMode}
                ></button>
                {
                    editTitle ?
                    <input type="text" className="editInput"
                    ref={editInputRef}
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => { if ( e.code === "Enter") toggleEditMode() }
                    }
                    />
                    :
                    <h2 className="taskPanelTitle">{title}</h2>
                }
            </div>
            {
                list.length? 
                <TaskList list={list} setList={setList} />
                : <div className="noTasks">You don't have any tasks yet</div>
            }
            {
                hasDone?
                <button className="clearDone icon-delete" 
                onClick={clearCompleted}
                >Clear completed</button>
                : <button className="clearDone icon-delete" disabled>Clear completed</button>
            }
        </div>
    )
}

export default TaskPanel;