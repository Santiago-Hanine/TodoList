import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'
import React from 'react';

function CreateTodoButton() {
    const {
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <button className='CreateTodoButton' onClick={() => {setOpenModal (state => !state)}}>+</button>
    );
}

export {CreateTodoButton}