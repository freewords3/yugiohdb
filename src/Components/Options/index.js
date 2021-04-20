import React from 'react'
import './options.css'
import {useDispatch, useSelector} from 'react-redux'

const Options = () => {
    const dispatch =  useDispatch()
    // const mainDeck = useSelector(state => state.deck.main)
    // const extraDeck = useSelector(state => state.deck.extra)
      
    return (
            <div className="options">
                <button onClick={() => dispatch({type: 'ERASE_DECK'})} >Erase</button>
            </div>
    )
}

export default Options

