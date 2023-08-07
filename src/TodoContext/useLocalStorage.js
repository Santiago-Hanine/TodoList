import React from "react";

function useLocalStorage(itemName, initalValue){

    const [item, setItem] = React.useState(initalValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    
    React.useEffect(() => {    
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
    
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initalValue))
            parsedItem = initalValue ;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
          }
  
          setLoading(false) 
          
        } catch(error){
          setLoading(false) 
          setError(error)
        }
      }, 2000);
  }, []);

    const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item, 
      saveItem, 
      error, 
      loading,
    };
  };
  
  export {useLocalStorage };

//  localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {text: 'Random Text', completed: true},
//   {text: 'Wash dishes', completed: true},
//   {text: 'Moan the loan', completed: false},
//   {text: 'Lalalalla', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));