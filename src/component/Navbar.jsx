import React from 'react'
import reactLogo from '../assets/react.svg'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <a href="https://react.dev" rel="noreferrer" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://react.dev" rel="noreferrer" target="_blank">
                <h2 className='border border-blue-500 p-3 rounded-2xl hover:bg-blue-950 text-sm font-bold'>click here for git repo</h2>
                    {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
                </a>
                <h2 className='text-xl font-bold'>
                    React interview questions and solutions
                </h2>
            </div>
        </>
    )
}

export default Navbar