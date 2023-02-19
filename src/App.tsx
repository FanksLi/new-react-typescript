import React from 'react';
import sum from './sum';


export default function App() {
    
    function click() {
        const num = sum(7, 10);
        console.log(num);
    }

    return <div>
        <span>hello world!!</span>
        <button onClick={click}>按钮</button>
    </div>
}