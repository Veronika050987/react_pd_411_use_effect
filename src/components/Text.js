import './Text.css';
import { useState, useEffect } from 'react';

export function Text()
{
    let [visible, setVisible] = useState(true);
    useEffect(() => {setTimeout(() => setVisible(false), 5000)}, [])
    return(
        <div>
            {visible && <h2>Hello</h2>}
        </div>
    )
}