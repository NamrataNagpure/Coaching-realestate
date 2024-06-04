import React from 'react'

export default function Coaching() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-gray-400'>
    <h1 className='font-bold text-3xl text-purple-900'>Coaching</h1>
    <label htmlFor="name" className='text-3xl pt-4'>Name</label>
    <input type="text" name="name" id="" className='border-2 border-slate-500'/>
    <label htmlFor="location" className='text-3xl pt-4'>Location</label>
    <input type="text" name="location" id="" className='border-2 border-slate-500' />
    <button type='submit' className='py-2 px-8 mt-2 rounded border-2 border-red-400 bg-red-600'>Submit</button>
    </div>
    </>
  )
}
