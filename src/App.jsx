import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/Chat'
import Kanban from './components/Kanban'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-12 gap-4'>
      
    <div className="col-span-4">
        <Chat/>
      </div>
      <div className="col-span-8">
        <Kanban/>
      </div>
    </div>
      
      
    </>
  )
}

export default App
