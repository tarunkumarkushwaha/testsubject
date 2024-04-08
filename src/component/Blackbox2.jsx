
import React from 'react'
import { useEffect, useState } from 'react'
const Blackbox2 = () => {
    const [second, setsecond] = useState(0)

    let boxarr = []
    for (let i = 0; i <= 60; i++) {
        let box = <div key={i} style={{ height: 20 + "px", width: 20 + "px", margin: 5 + "px", backgroundColor: second > i ? "white" : second == 60 ? "black" : "black" }}></div>
        boxarr.push(box)
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (second < 60) { setsecond(prev => prev + 1) }
            else { setsecond(0) }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [second])
    return (
        <>
            <h1>Q2. Write a react component in jsx that will display 60 blacksqaures across 6 rows .Every sec,make one black sqaure turn white.Once every square is white turn them back to black squares and restart the process.</h1>
            <h2 className='font-bold text-2xl self-start'>Solution-</h2>
            <div className='flex flex-wrap justify-center items-center p-6'>
                <div>{boxarr.slice(0, 10)}</div>
                <div>{boxarr.slice(10, 20)}</div>
                <div>{boxarr.slice(20, 30)}</div>
                <div>{boxarr.slice(30, 40)}</div>
                <div>{boxarr.slice(40, 50)}</div>
                <div>{boxarr.slice(50, 60)}</div>
            </div>
        </>
    )
}

export default Blackbox2