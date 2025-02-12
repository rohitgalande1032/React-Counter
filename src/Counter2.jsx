import { Button, Typography } from '@mui/material';
import {React, useEffect, useState} from 'react';

function Counter2() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log("Count1 : " + count1 + " Count2 :" + count2);
    //useEffect is called only once when the component is mounted/rendered first time
    //No dependencies: If you pass an empty array ([]) as the second argument, the code inside useEffect will run only once, right after the initial render. This is useful for one-time operations such as fetching initial data from an API.
    //With dependencies: If you pass an array containing one or more state variables, the code inside useEffect will run whenever any of those variables change. This is useful for code that depends on specific state variables.
    useEffect(()=> {
        console.log("I am called...")
    }, [count2]) //now it will be called whenever count2 changes
    return (
        <div>
            <Typography variant='h4'>Count 1 is: {count1}</Typography>
            <Typography variant='h4'>Count 2 is: {count2}</Typography>

            <Button variant='contained' color='primary' onClick={() => setCount1(count1 + 1)}>Add to Count 1 </Button>
            <Button variant='contained' color='primary' onClick={() => setCount2(count2 + 1)}>Add to Count 2</Button>


            <Typography variant='h3'>useEffect() Hook</Typography>
            <Typography variant='body2'> The useEffect hook provides a way to control when certain parts of our code execute, offering optimization opportunities for our React components.</Typography>
            <Typography variant='h6'>useEffect accepts two arguments</Typography>
            <Typography variant='body2'>Callback function: Contains the code to control when it runs.</Typography>
            <Typography variant='body2'>Dependency array: Specifies when the callback function should execute.</Typography>
        
        </div>
    )
}

export default Counter2;