import React, {useState, useEffect, useContext} from 'react'
import './css/GameField.css'
import {MoveContext} from '../App'

const Card = (props) => {
    const[moves, setMoves] = useContext(MoveContext)
    const[fliped, setFliped] = useState(false)

    let {flipedCards, setFlipedCards} = props

    const cardClicked = (e) => {
        if(!fliped){
            setMoves(moves + 1)
            if(flipedCards.length >= 2) return      
            setFliped(!fliped)
            let newFliped = flipedCards.map(x=>x)
            newFliped.push(props.symbol)
            setFlipedCards(newFliped)
        }
    }

    useEffect(()=>{
        if(flipedCards.length == 2 && flipedCards.includes(props.symbol)){
            setTimeout(()=>{
                if(flipedCards[0] !== flipedCards[1]){
                    setFliped(false)
                }
                setFlipedCards([])
            }, 500)
        }
    }, [flipedCards])

    return(
        <div className='card' onClick={(e)=>{cardClicked(e)}}>
            <div className={"card-inner" + (fliped ? " flip":"")}>
                <div className="card-front"></div>
                <div className="card-back" 
                dangerouslySetInnerHTML={{__html: props.symbol}}></div>
            </div>
        </div>
    )
}

export default Card