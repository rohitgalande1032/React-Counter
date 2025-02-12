import { Button, Typography } from '@mui/material';
import {React, useState} from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <Typography variant='h4'>Counter using useEffect()</Typography>
            <Typography variant='h4'>Count is {count}</Typography>
            <Button onClick={handleIncrement} variant='contained' color='success'>Increment</Button>
            <Button onClick={handleDecrement} variant='contained' color='error'>Decrement</Button>
        </div>
    )
}

export default Counter;