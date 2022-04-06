import React, { useState } from "react";
import Average from "./Components/AddItems/Average";
import ChartSales from "./Components/AddItems/ChartSales";
import MyProduct from "./Components/AddItems/MyProduct";

export default function AddItem() {
  const [details, setDetails] = useState(false)
 
  return (
    <>
      <title>Add Items</title>
    <div className='bg-slate-100 '>
    <div className='container grid grid-cols-6 content-center justify-items-center w-full h-fit mx-auto bg-lime-900'>
      <div className='col-span-6 bg-slate-100 green-500 w-full h-72 flex flex-col  items-center justify-between'>
        <div className='text-3xl text-slate-500 font-bold'><h1>Chart Penjualan</h1></div>
           <ChartSales onClick={() => setDetails(!details)}/>
        </div>


    <div className={`${details ? `scale-100 duration-700`:` duration-700 scale-0`} z-50 w-11/12 h-3/6 top-1/4 rounded-3xl overflow-hidden shadow-2xl bg-slate-800 bg-opacity-70 absolute flex mx-auto`}>
       <Average close={() => setDetails(false)}/>
    </div>



      <div className='col-span-6 bg-slate-200 w-full h-80'>
        <MyProduct />
      </div>



      
      <div className='col-span-6 bg-yellow-700 w-full h-80'>chart</div>

       </div>

    </div>
    
</>
  );
}
