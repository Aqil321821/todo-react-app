import React, { useRef, useState } from 'react';
import Card from './Card';

function App() {
  const [data, setData] = useState([]);

  const todoValue = useRef();
  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoValue.current.value);
    const newTodo = todoValue.current.value;
    if (newTodo.trim() === '') {
      return;
    }
    setData((prevData) => [...prevData, newTodo]);
    todoValue.current.value = '';
  };

  const deleteTodo = (index) => {
    console.log('delete', index);
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const editTodo = (index, value) => {
    console.log('edit');
    //create a new array with the updated value
    const updatedTodos = data.map((todo, i) => (i === index ? value : todo));
    //Agr i===index true ho to newArray me value jo k new aa rahi ha wo return krdo 
    //otherwise pirani value todo return krdo
    //set state (new array)
    setData(updatedTodos);
  };
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type='text' ref={todoValue} placeholder='Enter Todo' />
        <button type='submit'>Add Todo</button>
      </form>
      {data.length > 0 ? (
        data.map((item, index) => {
          return <Card title={item} key={index} deleteTodo={deleteTodo} editTodo={editTodo} index={index}></Card>;
        })
      ) : (
        <h1>No Todo</h1>
      )}
    </>
  );
}

export default App;
