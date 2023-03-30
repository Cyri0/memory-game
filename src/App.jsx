import { useState, createContext } from 'react'

import Navbar from './components/Navbar'
import GameField from './components/GameField'
import Footer from './components/Footer'

export const MoveContext = createContext()

function App() {
  const[moves, setMoves] = useState(0)
  return (
    <MoveContext.Provider value={[moves, setMoves]}>
    <div className="App">
      <Navbar/>
      <GameField setMoves={setMoves}/>
      <Footer moves={moves}/>
    </div>
    </MoveContext.Provider>
  )
}

export default App
