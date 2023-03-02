import React, {useState} from 'react';

const Counter = () => {

    const [currentN, setCurrentN] = useState('1')
    const [state, setState] = useState(0)


    const OnChange = (value:number) =>{
        setState(prev => prev + value)
        console.log(state)
    }


    return (
        <div>
            <div>
                <input type="text" value={currentN} onChange={(e) => setCurrentN(e.target.value)}/>
            </div>
            <div>
                {state}
            </div>
            <div>
                <button onClick={() => OnChange(1)}> Plus 1</button>
                <button onClick={() => OnChange(-1)}> Minus 1</button>
            </div>
            <div>
                <button onClick={() => OnChange(5)}> Plus 5</button>
                <button onClick={() => OnChange(-5)}> Minus 5</button>
                <button onClick={() => OnChange(parseInt(currentN))}> Plus n</button>
            </div>
        </div>
    );
};

export default Counter;