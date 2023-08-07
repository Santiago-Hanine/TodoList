import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const {item: todos,
        saveItem: saveTodos, 
        loading, 
        error} = useLocalStorage('TODOS_V1', []);

 const [searchValue, setSearchValue] = React.useState('');
 const [openModal, setOpenModal] = React.useState(false);

   const completedTareas = todos.filter(todo => !!todo.completed).length;
   const totalTareas = todos.length;

   const seachedTareas = todos.filter(
   (todo) => {
     const searchTarea = todo.text.toLowerCase()
     const tareaValue = searchValue.toLowerCase()
     return searchTarea.includes(tareaValue)
   }
   )

   const completeTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos[todoIndex].completed = true
     saveTodos(newTodos)
   }
   
   const deleteTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos.splice(todoIndex, 1)
     saveTodos(newTodos)
   }

   const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text:text,
      completed:false,
    })
    saveTodos(newTodos)
  }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTareas,
            totalTareas,
            searchValue,
            setSearchValue,
            seachedTareas,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,     
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }