import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUi(){
  const {
      loading,
      error,
      seachedTareas,
      completeTodo,
      deleteTodo,
      openModal,
  } = React.useContext(TodoContext)

    return (
        <>
          
        <TodoCounter />
        <TodoSearch />
        

        <TodoList>    
        {loading && <TodosLoading />}
        {error && <TodosError/>}
        {(!loading && seachedTareas.length === 0) && <EmptyTodos/>}

          {seachedTareas.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
          

        <CreateTodoButton />
    
            {openModal && (<Modal>
              <TodoForm />
            </Modal>
            )}
        </>
      );
}

export { AppUi };