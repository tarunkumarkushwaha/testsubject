import './App.css'
import Blackbox1 from './component/Blackbox1'
import Blackbox2 from './component/Blackbox2'
import CounterWithColor from './component/CounterWithColor'
import Navbar from './component/Navbar'


function App() {


  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center p-10">
        <Blackbox1 />
        <Blackbox2 />
        <CounterWithColor />
      </div>
      <footer className='text-center p-3 flex flex-col'>
        <p>more questions comming soon</p>
        <p>if you have one create pr</p>
      </footer>
    </>
  )
}

export default App
