import { useRef } from 'react';
import { useState } from 'react';

function Card({ title, deleteTodo, editTodo, index }) {
  const [showEditForm, setShowEditForm] = useState(true);
  const editedValue = useRef();

  const editClick = () => {
    editTodo(index, editedValue.current.value);
    setShowEditForm(true);
  };

  return (
    <div style={{ margin: '40px' }}>
      {showEditForm ? (
        <div>
          <h4>{title}</h4>
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => setShowEditForm(false)}>Edit</button>
        </div>
      ) : (
        <div>
          <input type='text' placeholder='Edit Todo' ref={editedValue} />
          <button onClick={editClick}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Card;
