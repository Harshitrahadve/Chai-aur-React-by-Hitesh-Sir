import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className='ouline-none px-4 text-white rounded-full shadow-lg'
            style={{ backgroundColor: 'red' }}>
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className='ouline-none px-4 text-white rounded-full shadow-lg'
            style={{ backgroundColor: 'green' }}>
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='ouline-none px-4 text-white rounded-full shadow-lg'
            style={{ backgroundColor: 'blue' }}>
            Blue
          </button>
          <button
            onClick={() => setColor('gray')}
            className='ouline-none px-4 text-white rounded-full shadow-lg'
            style={{ backgroundColor: 'gray' }}>
            Gray
          </button>
          <button
            onClick={() => setColor('#E6E6FA')}
            className='ouline-none px-4 text-gray-700 rounded-full shadow-lg'
            style={{ backgroundColor: '#E6E6FA' }}>
            Lavender
          </button>
          <button
            onClick={() => setColor('black')}
            className='ouline-none px-4 text-white rounded-full shadow-lg'
            style={{ backgroundColor: 'black' }}>
            Black
          </button>
          <button
            onClick={() => setColor('yellow')}
            className='ouline-none px-4 text-gray-800 rounded-full shadow-lg'
            style={{ backgroundColor: 'yellow' }}>
            Yellow
          </button>
          <button
            onClick={() => setColor('purple')}
            className='ouline-none px-4 text-black rounded-full shadow-lg'
            style={{ backgroundColor: 'purple' }}>
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
