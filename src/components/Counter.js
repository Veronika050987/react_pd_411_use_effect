import './Counter.css';
import{useState, useEffect} from 'react';

export function Counter()
{
    //useEffect(() => {}, [])
    let [cnt, setCnt] = useState(0);
    function increment()
    {
        setCnt(cnt + 1);
    }
    function decrement()
    {
        setCnt(cnt -1);
    }
    useEffect
    (
        () => 
            {
                console.log("Hello from Counter", cnt);
                return () => console.log("Counter unmounted");
            }, 
            [cnt]
    )
    
    return(
        <div id="counter">
            <div>{cnt}</div>
            <div> 
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}