// Create Counter using useReducer()

// The useReducer() hook offers developers a way to consolidate different-but-related state management logic into a single function. 
// It's a bit more complex than useState() , but it's a good tool to have in your belt.

import { Button } from '@mui/material';
import React, { useReducer } from 'react'

//Reducer function acccepts two parameters: state and action
function reducerFunction(state, action) {
    if(action.type === 'increment'){
        return {count: state.count + 1};
    }else if (action.type ==='decrement') {
        return {count: state.count - 1};
    }else {
        return {count: 0}
    }
}

const UseReducer = () => {
    //useReducer() accepts two parameters: reducer function and initial state
    //It returns two things: state and dispatch function
    const [state, dispatch] = useReducer(reducerFunction, {count: 0});

  return (
    <div>
        <h3>Count is {state.count}</h3>

        <div>
            {/* Dispatch sends request to reducer function to update state and
                object passed to dispatch function is action object.
            */}
            <Button variant='contained' color='secondary' onClick={()=> dispatch({type: "increment"})}>Increment</Button>
            <Button variant='contained' color='success' onClick={()=>dispatch({type: "decrement"})}>Decrement</Button>
            <Button variant='contained' color='error' onClick={()=>dispatch({type: "reset"})}>Reset</Button>
           
        </div>
    </div>
  )
}

export default UseReducer