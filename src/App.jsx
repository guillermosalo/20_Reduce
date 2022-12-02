import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import LSexample from './Components/LSexample'
import UserList from './Components/UserList'

const App = () =>  {
  const user = localStorage.getItem('user')
  const parsedUser = JSON.parse(user)
  // console.log(parsedUser)
  return (
    <>
      <LSexample/>
      <button onClick={() => localStorage.removeItem('user')}>Borrar user</button>
      <button onClick={() => localStorage.clear()}>Limpiar todo el LS</button>
      <Counter/>
      <UserList/>
    </>
  )
}

export default App