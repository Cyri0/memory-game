import { useState, createContext, useEffect} from 'react'

import Navbar from './components/Navbar'
import GameField from './components/GameField'
import Footer from './components/Footer'
import Modal from './components/Modal'

export const MoveContext = createContext()
export const GoodContext = createContext()
export const CardContext = createContext()

function App() {
  const[moves, setMoves] = useState(0)
  const[good, setGood] = useState([])
  const[modalIsVisible, setModalVisibility] = useState(false)
  const[timerUp, setTimerUp] = useState(true)
  const [cards, setCards] = useState([
    "&#129409;","&#8986;","&#9749;","&#9917;","&#9976;","&#127803;", "&#127814;","&#127825;"
  ])

  useEffect(() => {
    console.log(good)
    if(good.length === 16){
      setModalVisibility(true)
    }
  }, [good])

  return (
    <CardContext.Provider value={[cards, setCards]}>
    <GoodContext.Provider value={[good, setGood]}>
    <MoveContext.Provider value={[moves, setMoves]}>
    <div className="App">
      <Modal modalIsVisible={modalIsVisible} setModalVisibility={setModalVisibility}/>
      <Navbar/>
      <GameField setMoves={setMoves}/>
      <Footer moves={moves} timerUp={timerUp} setTimerUp={setTimerUp}/>
    </div>
    </MoveContext.Provider>
    </GoodContext.Provider>
    </CardContext.Provider>
  )
}

export default App
