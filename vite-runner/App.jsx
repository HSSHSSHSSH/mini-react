import React from './core/React.js'

// const App = React.createElement('div', { id: 'app' }, "乌迪尔  ", "乌迪尔！！！")

function Counter({ num }) {
  return <div>Counter: {num}</div>
}

function Button({ onClick }) {
  return <button onClick={onClick}>点击</button>
}

function myClick() {
  console.log('蛙叫你')
}

function App() {
  return (
    <div id="app">
      乌迪尔 乌迪尔！！！
      <Counter num={10}></Counter>
      <Counter num={100}></Counter>
      <Button onClick={myClick}></Button>
    </div>
  )
}

export default App
