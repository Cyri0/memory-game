import React, {useState, useEffect} from 'react'
import Card from './Card'
import './css/GameField.css'

const GameField = (props) => {
    const [cards, setCards] = useState([
        "&#129409;",
        "&#8986;",
        "&#9749;",
        "&#9917;",
        "&#9976;",
        "&#127803;",
        "&#127814;",
        "&#127825;"
    ])

    const [flipedCards, setFlipedCards] = useState([])

    useEffect(()=>{
        let newList = cards.map(x => x)
        newList = newList.concat(newList)
        newList = newList.sort((x,y) => 0.5 - Math.random())
        setCards(newList)
    }, [])

    useEffect(()=>{
        console.log(flipedCards)
    },[flipedCards])

  return (
    <section>
        { cards.map( (card, idx) => <Card flipedCards={flipedCards} setFlipedCards={setFlipedCards} key={idx} symbol={card}/>) }
    </section>
  )
}

export default GameField