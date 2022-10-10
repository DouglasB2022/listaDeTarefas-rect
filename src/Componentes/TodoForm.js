import React, { useEffect, useRef, useState } from 'react'

 function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handelSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*1000),
      text: input,
    });
    setInput("")
  }
  return (
    <div>
        
      <form className="todo-form" 
      onSubmit={handelSubmit}
      >{props.edit ? (
        <>
          <input type="text" 
          placeholder="Atualize sua tarefa"
          value={input}
          name="text"
          className="todo-input__edit" 
          onChange={handleChange}
          ref={inputRef}/>
        
            <button className="todo-button__edit" 
              onChange={() => setInput()}>
                Atualize</button>
        </>
        ) : (
          <>
            <input type="text" 
            placeholder="adicione uma tarefa"
            value={input}
            name="text"
            className="todo-input" onChange={handleChange}
            ref={inputRef}/>
          
            <button className="todo-button" 
              onChange={() => setInput()}>Adicionar
            </button>
          </>
          )}
      </form>
   </div>
  )
}
export default TodoForm