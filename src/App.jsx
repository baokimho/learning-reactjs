import React from 'react'

const App = () => {
  const names =['John', 'Jane', 'Doe', 'Smith']
  const name = 'Kim'
  const loggedIn = true
  const styles = {
    color: 'blue',
    fontSize: '30px',
    fontWeight: 'bold',
  }
  return (
    <>
    <div className="text-5xl">
      App</div>
      <p style={ styles }>Hello {name}</p>

      <ul>
        {names.map((name, index) =>{
          return <li key={index}>{name}</li>
        })}
      </ul>
      {loggedIn ? <h1>Hello member</h1> : <h1>Hello guest</h1>}
    </>
  )
}

export default App