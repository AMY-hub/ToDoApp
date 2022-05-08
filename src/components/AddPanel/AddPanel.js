import { useState } from 'react';

import './AddPanel.scss'

function AddPanel({ list, setList }) {

    const [ text, setText ] = useState('');

    const createTask = (e) => {
        e.preventDefault();
        if ( text.trim() !== '' ) {

            const id = list.length ? list[ list.length-1 ].id + 1 : 0;
            const task = { id: id, 
                            text: text, 
                            important: false, 
                            done: false };
            setList( (list) => [ ...list, task ] );
            setText(''); 
        }
    }

    return (
        <form onSubmit={createTask} className="addForm">
            <input className="addFormInput" type="text" 
            placeholder="Type task text here..."
            value={text} onChange={ (e) => setText(e.target.value) }
            />
            <button className="addFormBtn" type="submit">
                <div className="addFormIcon icon-arrow-side"></div>
            </button>
        </form>
    )
}

export default AddPanel;