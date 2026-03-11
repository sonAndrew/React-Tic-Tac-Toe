// import { useState } from 'react'
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
      <Row sqVal1='1' sqVal2='2' sqVal3='3' />
      <Row sqVal1='4' sqVal2='5' sqVal3='6' />
      <Row sqVal1='7' sqVal2='8' sqVal3='9' />
    </div>
  )
}

function Row({ sqVal1, sqVal2, sqVal3 }: { sqVal1: string, sqVal2: string, sqVal3: string }) {

  return (
    <div className='board-row'>
      <Square value={sqVal1} />
      <Square value={sqVal2} />
      <Square value={sqVal3} />
    </div>
  )
}

function Square({ value }: { value: string }) {

  function handleClick() {
    console.log('Square ' + value + ' clicked!');
  }
  return (
    <button className='sq' onClick={handleClick}>{value}</button>
  )
};