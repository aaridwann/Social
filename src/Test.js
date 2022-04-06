import axios from 'axios'
import React from 'react'

export default function test() {
let position = navigator.geolocation
console.log(position);
    return (
        <div className='container bg-slate-300 h-667 text-gray-600 px-32 w-screen'>
          <p>{position.coords}</p>
          

        </div>
    )
}
