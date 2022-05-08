import { useEffect, useRef, useState } from 'react';

import createKey from '../utils/createKey';

import './ThemeSelect.scss';

function ThemeSelect(props) {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selected, setSelected ] = useState(props.theme);
    const ref = useRef();

    const toggleOpen = () => setIsOpen( isOpen => !isOpen );
    //Handler and Effect for closing options select on the outside click:
    const handleClick = (e) => {
        if (!ref.current.contains(e.target)) setIsOpen(false);
    }
    useEffect( () => {
        document.addEventListener('mousedown', handleClick);
        return ()=> document.removeEventListener('mousedown', handleClick);
    }, [] )

    const options = [ 'blueberry', 'graphite', 'peanut', ];
    const items = options.map( option => {
        return (
            <li className={ option === selected? 'dropdownItem selected icon-done' : 'dropdownItem' }
            onClick={ () => {
                setSelected(option);
                props.changeTheme(option);
                toggleOpen();
            } }
            key={createKey()}
            >{option}</li>
        )
    });

    return (
        <div className="dropdown" ref={ref} >
            <button className="dropdownHeader icon-brush"
            onClick={toggleOpen}> 
            <span className="dropdownTitle">Theme</span>
            </button>
            { 
            isOpen &&
            (<div className="dropdownContainer">
                <ul className="dropdownList">
                    {items}
                </ul>
            </div>) 
            }
        </div>
    )
}

export default ThemeSelect;