import { useState } from 'react';

import './Task.scss';

function Task({task, changeParam, deleteTask}) {

    const { id, text, important, done } = task;
    const [ checked, setChecked ] = useState(done);
    
    return (
        <li className={`listItem
            ${important? 'important' : ''} 
            ${done? 'done' : ''}`} 
            >
                <button className="icon-important" title="Important!"
                onClick={ () => changeParam(id, 'important') }
                ></button>
                <label>
                    <input type="checkbox" 
                    className="hidden"
                    checked={checked}
                    onChange={ () => {
                        setChecked(!checked)
                        changeParam(id, 'done')
                    } }
                   />
                   <span className={`listCheck ${checked? 'icon-done' : ''}`}></span>
                    <p>{text}</p>
                </label>
                <button className="listItemDel icon-trash"
                title="Delete"
                onClick={ () => deleteTask(id) }
                ></button>
            </li>
    )
}

export default Task;