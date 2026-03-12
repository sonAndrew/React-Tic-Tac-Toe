import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <div className='app'>
      <Board />
      <HistorySection />
    </div>
  )
}

interface IPlayer {
  name: string,
  points: number,
  history: Array<string>
}

function Player({ Player: IPlayer }) {
  const [name, setName] = useState("");

  function handleName() {
    if (name === "") {
      // Ooops! Need a Form to handle getting player data.
    }
  }

  return (
    <p>{Player.name}</p>
  )
}

function HistorySection() {

  return (
    <div className='history'>
      <h4>Game History</h4>
      <div className='players-container'>
        <p>Player 1</p>
        <p>|</p>
        <p>Player 2</p>
      </div>
      <p>________________________</p>
    </div>
  )
}

function Board() {

  return (
    <div className='board'>
      <ThreeSqRow />
      <ThreeSqRow />
      <ThreeSqRow />
    </div>
  )
}

function ThreeSqRow() {
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
  // const [clickCnt, setClickCnt] = useState(0);

  function handleClick() {
    setValue("X");
  }
  return (
    <button type='button' id='btn' className='sq' onClick={handleClick}>
      {value}
    </button>
  )
};
