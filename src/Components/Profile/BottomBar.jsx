import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function BottomBar({activeSearch}) {
    let navigate = useNavigate()
  return (
    <div className=" w-full h-20 bg-slate-400 flex gap-4 items-center justify-around text-slate-500">
        <h1 onClick={() => navigate('/timeline')}>Home</h1>
        <h1 onClick={() => navigate('/myprofile')}>Profile</h1>
        <h1 onClick={activeSearch}>Search</h1>
        <h1 onClick={() => navigate('/market')}>Market</h1>
    </div>
  )
}
