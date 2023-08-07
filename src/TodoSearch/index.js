import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
  
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

    return (
    <div className='container'>
    <input placeholder="Search your TODO here..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
    </div>
    );
  }

  export { TodoSearch };
