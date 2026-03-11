import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <>
      <Board />
    </>
  )
}

function Board() {

  return (
    <div className='board'>
      <Row />
      <Row />
      <Row />
    </div>
  )
}

function Row() {
  return (
    <div className='board-row'>
      <Square />
      <Square />
      <Square />
    </div>
  )
}

function Square() {
  const [value, setValue] = useState("");

  function handleClick() {
    if (value === 'X') {
      setValue("");
    }
    else {
      setValue('X');
    }
  }
  return (
    <button type='button' id='btn' className='sq' onClick={handleClick}>
      {value}
    </button>
  )
};
