import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

// useRef hook
  const passwordRef = useRef(null)

// useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*_-~=+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30)
    window.navigator.clipboard.writeText(password)
  },[password])

// UseEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      {/* <h1 className='text-orange-600 font-bold text-5xl text-center py-5'>Password Generator</h1> */}
      <div
        className="w-full max-w-2xl mx-auto shadow-md rounded-lg p-5 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 font-semibold text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-5">
          <input
            type="text"
            value={password}
            className='ouline-none w-full py-1 px-3 text-2xl font-semibold'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-2xl font-semibold focus:bg-blue-900'>
            Copy
          </button>
        </div>
        <div className="flex text-xl gap-x-7">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charaterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
