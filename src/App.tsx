import { useState, type ReactNode } from 'react'
import './App.css'

export default function App() {
  const p1: IPlayer = {
    id: 1,
    name: 'Obi-wan',
    points: 0,
  }
  const p2: IPlayer = {
    id: 2,
    name: 'Anakin',
    points: 0,
  }

  return (
    <>
      <PlayerForm />
      <div className='app'>
        <Board />
        <HistorySection Player1={p1} Player2={p2} />
      </div>
    </>
  )
}

interface IPlayer {
  id: number,
  name: string,
  points: number,
  // history: Array<string>
}

function PlayerForm() {
  const placeholderText = "Enter player name";

  return (
    <Form action='' rest='post'>
      <Separator mTop='' mRight='268px' mBottom='' mLeft='' />
      <p className='name'>
        <Label htmlfor='name'>Player 1:</Label>
        <input type='text' id='name' name='user_name' value={placeholderText} />
      </p>
      <Separator mTop='' mRight='30px' mBottom='' mLeft='15px' />
      <p className='name'>
        <Label htmlfor='name'>Player 2:</Label>
        <input type='text' id='name' name='user_name' value={placeholderText} />
      </p>
    </Form>
  )
}

function PlayerHBox({ Player }: { Player: IPlayer }) {

  return (
    <div className='player'>
      <p>Player {Player.id}: {Player.name}</p>
      <p>____________________</p>
      <History />
    </div>
  )
}

function History() {


  return (
    <div>
      H
    </div>
  )
}

const Label = ({ htmlfor, children }: { htmlfor: string, children: ReactNode }) => {
  return <label htmlFor={htmlfor}>{children}</label>
}

const Form = ({ action, rest, children }: { action: string, rest: string, children: ReactNode }) => {
  return <form action={action} method={rest} >{children}</form>
}

function HistorySection({ Player1, Player2 }: { Player1: IPlayer, Player2: IPlayer }) {

  return (
    <div className='history'>
      <h4>Game History</h4>
      <div className='players-container'>
        <PlayerHBox Player={Player1} />
        <PlayerHBox Player={Player2} />
      </div>
    </div>
  )
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  const squaresList = squares.map((v, n) => <Square value={v} onSquareClick={() => handleClick(n++)} />)

  return (
    <div className='board'>{squaresList}</div>
  )
}

function Square({ value, onSquareClick }: { value: string, onSquareClick: () => void }) {

  return (
    <button type='button' id='btn' className='sq' onClick={onSquareClick}>
      {value}
    </button>
  )
};

interface ISeparator {
  mTop: string,
  mRight: string,
  mBottom: string,
  mLeft: string
}

function Separator({ mTop, mRight, mBottom, mLeft }: ISeparator) {

  return (
    <span style={{
      marginTop: mTop,
      marginRight: mRight,
      marginBottom: mBottom,
      marginLeft: mLeft
    }} ></span>
  )
}