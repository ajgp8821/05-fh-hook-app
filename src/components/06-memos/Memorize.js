import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import './effects.css';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <h1>Counter: <Small value={counter} /></h1>

            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>
            
            <button 
                className='btn btn-info ml-1'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}