import React,{useState} from 'react'
import { useLocation } from 'react-router'

export default function ViewPost(props) {
  const [stateOption, setStateOption] = useState(false)
  let location = useLocation()
  let url = location.pathname === '/myprofile' ? true : false
  console.log(url);

  return (
    <div className='w-full flex flex-col justify-center text-slate-500 items-center h-3/4 mx-auto my-auto bg-slate-50 shadow-2xl p-4'>
            <div className='w-60 overflow-hidden flex flex-col justify-center items-center text-center'>
              <div className=' bg-center bg-cover w-full flex justify-center item-center max-h-96'>
                <img alt={props.image} src={props.image}/>
              </div>
                <p className='font-light text-sm mt-6'>It is a long established fact that a reader will be distracted by the readable content</p>

                {/* option section */}
                <div  className={`${stateOption ? `opacity-100 `:`opacity-0`} transition duration-100 text-slate-100 bg-slate-500 bg-opacity-80 absolute w-44 h-40 gap-4 flex flex-col justify-center items-start place-items-center px-2 text-sm`}>
                  <button onClick={() => setStateOption(false)} className='hover:bg-slate-300 hover:text-slate-500 px-2 absolute top-0 right-0 mr-2 mt-2 rounded-sm'>X</button>
                  <p onClick={props.setProfilePicture} className='hover:bg-slate-300 hover:text-slate-500 px-2'>Set as profile picture</p>
                  <p className='hover:bg-slate-300 hover:text-slate-500 px-2'>Share image</p>
                  <p className='hover:bg-slate-300 hover:text-slate-500 px-2'>Delete image</p>
                </div>

            </div>

            <div className=' mt-2 w-full h-20 flex flex-col gap-4 justify-center items-center'>
                <div className=' flex gap-4'>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                    <button className={`${url ? `block` : `hidden`} hover:bg-slate-400 w-6`} onClick={() => setStateOption(!stateOption)} >...</button>
                </div>
                <div className=' flex gap-4 text-xs font-bold self-end'>
                    <p>1.5K Like</p>
                    <p>5.3K Comment</p>
                </div>
            </div>
    </div>
  )
}
