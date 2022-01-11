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
    <div className='grid grid-cols-4 w-full shadow-xl md:w-2/4 mx-auto overflow-x-hidden bg-gray-200 h-full'>
  {/* Top */}
  <div className='col-span-4 h-20 flex justify-center items-start'>
      <LazyLoadComponent>
    <div id="story" style={{webkitScrollbars:false}} className='overflow-x-auto h-28 md:w-2/4 w-full snap-x z-100 fixed flex gap-4 items-center border-b-2 shadow-xl bg-white text-gray-600'>
      {img.map((a) => (
      <Story img={a}/>
      ))}
    </div>
      </LazyLoadComponent>
  </div>
{/* Side Bar */}
  <div onClick={() => setNav(false)} className='col-span-1 w-16 h-20  '>
    <div className='fixed mt-4 md:left-1/4 justify-start items-center flex w-16 h-667 md:h-3/4  overflow-x-hidden '>
      <SideBar/>
    </div>
  </div>

{/* content */}
  <div onClick={() => setNav(false)} className='col-span-3 h-fit w-80 -ml-8 md:w-3/4 '>
      <div className='flex scroll-smooth  flex-col gap-4 mt-12 items-center justify-center'>
      <LazyLoadComponent>
      {img.map((a) => (<Content img={a}/>))}
      </LazyLoadComponent>
      </div>
  </div>

{/* Botom */}
    <div className='w-56  h-56 p-4 md:left-1/4 fixed bottom-0 flex items-center justify-center col-span-4 overflow-hidden '>
      <div style={{ transitionDuration:'0.5s'}} className={`${nav ? `bg-gray-400 text-white w-60 h-60 bg-opacity-60`:`bg-white text-gray-500 w-32 h-32 bg-opacity-100`} z-40  -ml-52 -mb-52  border-2 border-gray-100  flex justify-center items-center rounded-full`}>
        <button onClick={() => (setNav(!nav), setTimeout(() => {setNav(false)},7000))} className='mb-8 ml-8 text-2xl font-bold'>
          NAV
        </button>
      </div>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.3s'}} className={`${nav ? `left-8 top-10`:`-left-2 top-48`} text-gray-500 font-bold absolute`}>Home</button>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.4s'}} className={`${nav ? `left-28 top-16 `:`-left-4 top-48`} text-gray-500 font-bold absolute`}>Profile</button>
      <button style={{ transitionDuration:'0.4s', transitionDelay:'0.5s'}} className={`${nav ? `left-40 top-36`:`-left-4 top-48`} text-gray-500 font-bold absolute `}>About</button>

    </div>


    </div>
  )
}
