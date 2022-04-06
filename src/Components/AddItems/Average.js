import {React, useState} from "react";
import { useEffect } from "react/cjs/react.development";
const sale = require("./Data.json");
export default function Average(props) {
    const [Date, setDate] = useState(() => {
            // const x = sale.map((a) => a.data.map((x) => x.transaction).reduce((a,b) => a+b))
            const date = sale.map((a) => ({month:a.month,data:a.data.map((y) => y.transaction).reduce((a,b) => a+b)}))
            // setDate(date)
            return date
    })

console.log(Date);
  return (
    <div className='container snap-x mb-4 mx-auto flex flex-col gap-4 items-center content-center overflow-x-scroll'>
     <button onClick={props.close} className="  btn btn-sm btn-outline z-100 absolute right-8 mt-2 border-0 bg-gradient-to-r from-orange-400 to-orange-200 hover hover:from-orange-200 hover:to-orange-400 transition  duration-500">X</button>
      <h1 className='h-10 flex text-2xl justify-center items-center py-2 rounded-xl text-slate-500 w-full text-center font-bold'>
        <p className='absolute bg-slate-100 w-full h-12 items-center flex justify-center shadow-xl'>Average Sale</p>
      </h1>
    
    <div className='flex flex-row px-4 items-center h-full mx-auto gap-4'> 
    {Date.map((a,i) => ( 
      <div key={i} className="w-56 snap-center text-slate-500 h-52 rounded-xl shadow-xl border-slate-200 border bg-stone-100 flex flex-col justify-around items-center gap-4">
        <h1 className=" w-36 py-2 rounded-xl shadow-lg bg-slate-200 text-center text-2xl font-bold">{a.month}</h1>
          <div className="flex flex-row w-full justify-between px-8 items-center gap-2 border-t pt-4 border-slate-300">
            <h1 className="font-bold">Total</h1>
            <div className='flex flex-col'>
              <h1 className="font-semibold text-2xs">{a.data} Sales</h1>
              <div style={{width:a.data/2}} className="h-1 self-start w-28 bg-gradient-to-r from-orange-300 to-orange-200 rounded-2xl "/>
            </div>
          </div>
            <span className='text-center font-semibold'>
            <h1 className="text-sm">Omzet </h1>
            <h1 className="font-bold">Rp.{a.data*2000000}</h1>
            </span>
      </div>
      ))}
    </div>
  
  
    </div>
  );
}
