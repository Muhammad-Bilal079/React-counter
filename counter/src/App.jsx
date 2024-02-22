import { useState } from 'react'

function App() {
  let counterValue = 0

  let [Counter , setCounter] = useState(counterValue)

  const addValue = () => {
    console.log('addvalue' + Counter);
    setCounter(Counter + 1)

  }


  const removeValue = () => {
    console.log('removevalue');
    setCounter(Counter - 1)
  }
  return (

  <div style={{
    backgroundColor:'gray',
    height: '100vh',
    width: '100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  
  }}>
  
  <div style={{
      backgroundColor:'black',
      borderRadius:'8px',
      color:'white',
      padding:'22px',
      width:'50%',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'10px'
      
    }}>

      <h1>Counter In React</h1>
      <h1>{Counter}</h1>

      <button
        onClick={addValue}
      >Add</button>

      <button
        onClick={removeValue}
        >Remove</button>
    </div>
  </div>
  )
}

export default App
