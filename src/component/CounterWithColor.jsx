import React, { useReducer } from 'react'

let colorarr = ["blue", "black", "green", "white", "yellow", "orange", "cyan", "grey"]

const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease"
}

const reducerfunc = (state, action) => {
    if (action == ACTIONS.INCREASE) {
        // console.log("inc", state, action)
        return { count: state.count + 1, color1: colorarr[Math.floor(Math.random() * colorarr.length)], color2: state.color2 }
    }
    if (action == ACTIONS.DECREASE) {
        // console.log("dec", state, action)
        return { count: state.count - 1, color2: colorarr[Math.floor(Math.random() * colorarr.length)], color1: state.color1 }
    }
}

const CounterWithColor = () => {
    // redux 
    let state = { count: 0, color1: "black", color2: "blue" }
    const [count, dispatch] = useReducer(reducerfunc, state)
    return (
        <>
            <h1>Q3. Write a react component in jsx that will display two button and a containing number, on click of first button the number will increase by 1 and click of second the number will decrease by one and buttons color should change randomly</h1>
            <h2 className='font-bold text-2xl self-start'>Solution-</h2>
            <h2>count is {count.count} </h2>
            <div className="flex justify-center p-4">
                <button className='m-5 p-5 rounded-xl' style={{ backgroundColor: count.color1 }} onClick={() => dispatch(ACTIONS.INCREASE)}>
                    increase
                </button>
                <button className='m-5 p-5 rounded-xl' style={{ backgroundColor: count.color2 }} onClick={() => dispatch(ACTIONS.DECREASE)}>
                    decrease
                </button>
            </div>
        </>
    )
}

export default CounterWithColor