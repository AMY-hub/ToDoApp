import useLocalStorage from 'use-local-storage';

import AddPanel from '../AddPanel/AddPanel';
import TaskPanel from '../TaskPanel/TaskPanel';

import './Main.scss';

function Main() {
    const [ list, setList ] = useLocalStorage('list', []);

    return (
        <main className="main">
            <TaskPanel list={list}  setList={setList} />
            <AddPanel list={list} setList={setList}/>
        </main>
    )
}

export default Main;