import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Content from './Components/TimlineComponents/Content'
import SideBar from './Components/TimlineComponents/SideBar'
import Story from './Components/TimlineComponents/Story'
import {LazyLoadComponent} from 'react-lazy-load-image-component'

let url = 'https://picsum.photos/v2/list?page=2&limit=100'

export default function Timeline() {
  const [nav, setNav] = useState(false)
  const [img,setImg] = useState([])
  const getData = async () => {
    const res = await axios.get(url)
    .then(res => res.data.map((a) => a.download_url))
    .then(response => setImg(response))
  }
  useEffect(() => {
      getData()
  },[])

  return (
    <div className='grid grid-cols-4 w-full bg-fuchsia-400 h-full'>
  {/* Top */}
  <div className='col-span-4 h-20 bg-rose-600'>
    <div className='z-100 overflow-x-auto scroll-smooth fixed flex gap-4 justify-center items-center md:w-3/6 md:left-1/4 h-28   bg-blue-700'>
      <LazyLoadComponent>
      {img.map((a) => (
      <Story img={a}/>
      ))}
      </LazyLoadComponent>
    </div>
  </div>
{/* Side Bar */}
  <div onClick={() => setNav(false)} className='col-span-1 w-16 h-20 bg-green-600 '>
    <div className='fixed mt-4 md:left-1/4 justify-start items-center flex w-16 h-667 md:h-3/4 bg-purple-600 '>
      <SideBar/>
    </div>
  </div>


{/* content */}
  <div onClick={() => setNav(false)} className='col-span-3 h-fit w-80 -ml-8 md:w-3/4 bg-yellow-600'>
      <div className='flex scroll-smooth  flex-col gap-4 mt-12 items-center justify-center'>
      <LazyLoadComponent>
      {img.map((a) => (<Content img={a}/>))}
      </LazyLoadComponent>
      </div>
  </div>

{/* Botom */}
    <div className='w-36 h-36 p-4 md:left-1/4 fixed bottom-0 flex items-center justify-center col-span-4  '>
      <div style={{ transitionDuration:'0.5s'}} className={`${nav ? ` w-60 h-60`:` w-32 h-32`}  -ml-32 -mb-32 bg-green-300  flex justify-center items-center rounded-full`}>
      <button onClick={() => setNav(!nav)} className=' mb-8 ml-8 text-2xl font-bold'>
        X
      </button>
      </div>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.3s'}} className={`absolute ${nav ? `left-8 -top-4`:`left-2 top-48`} `}>1</button>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.4s'}} className={`${nav ? `left-28 top-6 `:`left-0 top-48 `} absolute `}>2</button>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.5s'}} className={`${nav ? `left-40  top-24`:`left-0 top-48`} absolute  `}>3</button>

    </div>


    </div>
  )
}
