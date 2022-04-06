import React from 'react'

export default function Notif({data,closeButton,clear}) {
  return (
    <div className='w-full h-fit py-4 mt-40 flex flex-col gap-4 justify-center items-center bg-opacity-75 rounded-xl bg-yellow-100 fixed z-100'>
        <button onClick={closeButton} className='btn btn-sm btn-circle absolute top-0 right-0 mr-4 mt-2 bg-white text-zinc-600 border-0 font-bold '>X</button>
        <p className='w-8 h-8 bg-green-300 text-white font-bold text-2xl text-center rounded-3xl absolute -top-4 left-0'>{data.length}</p>
        {data.map((x,i) => (
         <p key={i+1} className=' btn hover:bg-zinc-100 border-0 shadow-lg text-zinc-600 font-bold w-72 h-10 bg-white text-center flex justify-center items-center rounded-lg bg-opacity-70 hover:bg-opacity-90'>{x.toLocaleUpperCase()}</p>
        ))}
        {data.length == 0 ? <p className='text-zinc-500'>No recent notification</p> : 
        <button onClick={clear} className='btn btn-sm self-end mr-6'>Clear</button>
        }
    </div>
  )
}
