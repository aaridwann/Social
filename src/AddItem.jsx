import React, { useState } from 'react'
import data from './Paket.json'
const paket = data
function Rp(a){
    return "Rp. " + a.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
export default function AddItem() {
    let [config, setConfig] = useState('h-8 rotate-12')
    let [judul,setJudul] = useState()
    let [data,setData] = useState({name:'',address:'',date:'',package:''})
    const setAdd =() => {
        setConfig('h-96 rotate-0')
    }
    const pilih = (a) => {
        let res = JSON.parse(a)
        setJudul(res) 
        setData(data, data.package = a)
    }
    console.log(data);
    const submit = (e) => {
        e.preventDefault();
        console.log(data);        
    }
    return (
        <div>
        {config}
        <title>Add Item</title>
        <div style={{transition:'1s'}} className={`container justify-center flex mt-20 rounded-3xl mx-auto w-2/5 ${config} flex items-center bg-slate-400`}>
           {config === 'h-8 rotate-12' &&  <button onClick={setAdd} className='bg-slate-500 px-4 rounded-3xl text-white '>Add Item</button> }
           {config === 'h-96 rotate-0' && 
            <div className="p-10 card bg-gray-200 text-gray-600">
            <form onSubmit={submit} className="form-control text-gray-600">
                <label className="label">
                <span className="label-text text-gray-600">Username</span>
                </label> 
                <input onChange={(e) => setData(data, data.name= e.target.value)} type="text" placeholder="username" className="input input-ghost"/>
                <label className="label">
                <span className="label-text text-gray-600">Address</span>
                </label> 
                <input onChange={(e) => setData(data, data.address= e.target.value)} type="text" placeholder="username" className="input input-ghost"/>
                <label className="label">
                <span className="label-text text-gray-600">Address</span>
                </label> 
                <input onChange={(e) => setData(data, data.date= e.target.value)} type="date" placeholder="username" className="input input-ghost"/>
                <label className="label">
                <span className="label-text text-gray-600">Package</span>
                </label> 
                <select onChange={(e) => pilih(e.target.value)}  className="select select-bordered w-full max-w-xs text-white ">
                    <option disabled="disabled" selected="selected">Choose your Package</option> 
                    {paket.map((a,i) => (
                    <option key={i} value={JSON.stringify(a)}>{a.name}</option> 
                    ))}
                    
                </select>
                <button type='submit' className='btn btn-md btn-primary mt-8'>Submit</button>
            </form>


                        {judul !== undefined && 
            <div style={{ transition:'4s' }} className={`${judul !== undefined ? `block` : `hidden`} flex fixed ml-60 bg-yellow-700 font-semibold text-white flex-col rounded-3xl py-8 px-4 bg-opacity-40 w-80 justify-center items-center z-50`}>
            <button onClick={() => setJudul(undefined)} className='self-end absolute top-0 z-50 m-4 bg-yellow-300 text-white font-bold items-center px-2 rounded-2xl hover:text-gray-700 '>X</button>
                    <h1 className='text-2xl mb-7'>Package Details</h1>
                    <label className="label">
                      <span className="label-text">Package Name :</span>
                     </label> 
                       <p>{judul.name}</p>
                    <label className="label">
                      <span className="label-text">Package Price :</span>
                     </label> 
                       <p>{Rp(judul.price)}</p>
                    <label className="label">
                          <span className="label-text">Package description :</span>
                     </label> 
                           <p className=' text-justify '>{judul.description}</p>
                           
                    </div>  
                        }
            </div>
            
           }
        </div>


        </div>
    )
}
