import React, {useState, useEffect, useContext} from 'react'
import Card from './Card'
import './css/GameField.css'
import {CardContext} from '../App'

const GameField = (props) => {
    const[cards, setCards] = useContext(CardContext)

    const [flipedCards, setFlipedCards] = useState([])

    useEffect(()=>{
        let newList = cards.map(x => x)
        newList = newList.concat(newList)
        newList = newList.sort((x,y) => 0.5 - Math.random())
        setCards(newList)
    }, [])



  return (
    <section>
        { cards.map( (card, idx) => <Card flipedCards={flipedCards} setFlipedCards={setFlipedCards} key={idx} symbol={card}/>) }
    </section>
  )
}

export default GameField