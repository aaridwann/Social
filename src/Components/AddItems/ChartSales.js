import React from "react";




export default function ChartSales(props) {
  const sale = require('./Data.json')

  return (
    <div className='w-full px-4 h-60 scroll-smooth scroll-mx-10 snap-x bg-slate-200 flex flex-wrap flex-col justify-center items-center gap-5 overflow-y-hidden overflow-x-auto text-gray-800 text-center '>
    {sale.map((a,i) => ( 
      <div key={i} className='snap-center w-64 h-56 mx-auto justify-items-center grid grid-cols-4 border rounded-xl border-slate-200 shadow-xl bg-slate-100 py-3'>
        <h1 onClick={props.onClick} className='col-span-4 h-11 w-3/5 self-start flex items-center justify-center text-2xl font-bold text-slate-500 bg-slate-200 shadow-xl rounded-xl'>
          {a.month}
        </h1>
        {a.data.map((x,i) => (
        <div key={i} className='col-span-1 w-12 h-36 py-1 text-slate-500 flex flex-col items-center justify-end text-xs'>
        <p className='text-xs font-semibold animate-pulse'>{x.transaction}</p>
          <div style={{height:x.transaction}} className='w-1 hover:h-1/3 transition duration-500 bg-orange-300 rounded-3xl' />
          <h1 className=" font-bold border-t-2 border-gray-100 p-1 mt-2 text-slate-500 ">Week {x.week}</h1>
        </div>
        ))}
      </div>
      ))}
    </div>
  );
}
