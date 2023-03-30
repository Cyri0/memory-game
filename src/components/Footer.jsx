import React, {useEffect, useState, useContext} from 'react'
import './css/Footer.css'
import {GoodContext} from '../App'

const Footer = (props) => {
  const[time, setTime] = useState(0)
  const[good, setGood] = useContext(GoodContext)
  let {timerUp, setTimerUp} = props
  const startTime = new Date()
  const convertTime = (sec) => {
    let min = Math.floor(sec / 60)
    sec = Math.floor(sec % 60)

    sec = sec < 10 ? `0${sec}` : sec
    min = min < 10 ? `0${min}` : min

    return `${min}:${sec}`
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(Math.floor((startTime - new Date())/1000)*-1)
    }, 1000)

    if(!timerUp) clearInterval(interval)

    return ()=> clearInterval(interval)
  }, [timerUp])

  useEffect(()=>{
    if(good.length === 16) setTimerUp(false)
  }, [good])


  return (
    <footer>
        <div className='footer-data-holder'>
            <span>Time</span>
            <span className="footer-data">{convertTime(time)}</span>
        </div>
        <div className='footer-data-holder'>
            <span>Moves</span>
            <span className="footer-data">{props.moves}</span>
        </div>
    </footer>
  )
}

export default Footer