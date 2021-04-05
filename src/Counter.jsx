import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './redux/ducks/counter'

const Counter = ({name}) => {
    const dispatch = useDispatch();
    const [votes, setVotes] = useState(0)
    const count = useSelector((state) => state.counter)
    console.log('couner', count)
    const inrementChange = () => {
        dispatch(increment())
        setVotes(votes + 1)
    }
    const decrementChange = () => {
        dispatch(decrement())
        setVotes(votes - 1)
    }

    return (
        <>
        <h3>{name}</h3>
        <h3>{votes}</h3>
        <button onClick={inrementChange}>Increment</button>
        <button onClick={decrementChange}>Decrement</button>
        </>
    )
}

export default Counter