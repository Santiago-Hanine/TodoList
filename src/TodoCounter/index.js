import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  
  const {
    completedTareas,
    totalTareas,

  } = React.useContext(TodoContext)

    return (
      <h1>
        <span className='bold'>{completedTareas}</span> of <span className='bold'>{totalTareas}</span> TODOs completed 
      </h1>
    );
  }

  export { TodoCounter };
