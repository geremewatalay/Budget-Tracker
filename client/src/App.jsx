import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-200 min-h-screen'>
      <h1 className='text-3ml font-bold text-center pt-12 '>Personal Finance Tracker</h1>
      <div className='container mt-20 mx-auto px-5'>
      <div className='p-5 bg-white rounded-lg shadow-lg'>
        <div className='mt-16 mb w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border border-gray-100'>
          
            <h1 className='text-xl font-bold text-center mb-5'>Add Your Transactions</h1>
            <form className='flex text-center flex-col mx-auto border-1 border-double border-indigo-600 w-full justify-between my-5'>
              <input 
              type="text" 
              className='border border-slate-300 rounded-md w-full px-2 py-2 mb-2'
              placeholder='Description'
              />
              <input 
              type="number"
              className='border border-slate-300 rounded-md w-full px-2 py-2 mb-2'
              placeholder='Description'
              />
              <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300 px-4 py-2 text-white' type='submit'>
                Add Transaction
                </button>
            </form>
          </div>
        </div>
      </div>
      
   
    </div>
  )
}

export default App
