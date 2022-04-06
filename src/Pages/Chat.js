import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
export default function Chat() {
  const socket = io('http://192.168.100.13:4000')
  const [user,setUser] = useState()
  const [people,setPeople]= useState([])
  const [target,setTarget] = useState()
  const [text,setText] = useState()
  const [message, setMessage] = useState([])
  function join(){
    socket.emit('join',user)
  }
  function send(){
    socket.emit('message',{target:target,message:text,from:user})
  }
  socket.on('connect',(socket) =>console.log(socket))
  socket.on('online',args => setPeople([...people,args]))
  socket.on('message',(args) => console.log(args))
  
  
  return (
    <div>
      <div className='flex justify-center items-center text-slate-500 mx-auto p-4 gap-2'>
        <label>username</label>
         <input type='text' value={user} onChange={(e) => setUser(e.target.value)} className='input-bordered border-2 border-gray-800' />
        <button onClick={join} className='btn btn-sm btn-primary'>Joint</button>
      </div>
{/* Chat Kolom */}
<div className=' text-slate-500 flex flex-col justify-center items-center gap-5'>
    <div id='chat' className=' text-slate-500 pl-6 w-1/2 h-40 rounded-xl border-2 border-slate-400 flex flex-col gap-1'>


    </div>
    <div className='flex flex-row gap-2 content-center items-center justify-center'>
      <input onChange={(e) => setText(e.target.value)} type='text' className=' input input-bordered bg-slate-50 border-slate-500 -mt-4'/>
      <button onClick={send} className='btn btn-sm btn-primary'>Kirim</button>
    </div>
</div>


      <div className=' flex justify-center text-slate-500 items-center gap-4'>
        <label>Online</label>
        <select onChange={(e) => setTarget(e.target.value)}>{people && people.map((x) => <option key={x.id} value={x.id}>{x.user}</option>)}</select>
      </div>
    </div>
  )
}
