import React,{useEffect} from 'react'
import BottomBar from '../../Pages/Profile/BottomBar'

export default function Market() {

    useEffect(() => {
        console.log('start market')
        
        return() =>{
            console.log('close')
        }

    })
  return (
        <div className="flex flex-col w-full h-screen bg-slate-200">
            {/* Section 1 */}
            <div className=" snap-x flex flex-col items-center gap-4 text-slate-500 w-full h-52 py-2 bg-slate-100">
                <h1 className=' w-full hover:bg-slate-400 bg-slate-200 text-center py-2'>Photography Market</h1>
                <div className="scroll-ml-6 px-4 snap-start grid content-center place-items-center grid-flow-col overflow-x-scroll w-full h-full gap-2">
                   {/* Content  */}
                    <div className=" w-64 h-20 rounded-full shadow-md  bg-white flex flex-row items-center gap-2">
                        {/* Image */}
                            <div className="rounded-full w-24 h-24 object-cover overflow-hidden  ">
                                <img alt='test' className=" " src='https://i.pinimg.com/564x/aa/f7/29/aaf729553918dc12db99c096158c641f.jpg'/>
                            </div>
                        {/* Identity */}
                            <div className='flex flex-col mn  '>
                                <h1 className='font-bold text-sm '>Grab-it Photography</h1>
                                <h2 className='text-xs font-light'>Serang, Banten</h2>
                                <p className=' text-xs font-extralight italic mt-2 '>Good Atittude</p>
                            </div>
                    </div>
                </div>
            </div>
          

    {/* Bottom Bar */}
    <div className=" fixed mx-auto w-full bottom-0">
        <BottomBar/>
    </div>

        </div>
  )
}
