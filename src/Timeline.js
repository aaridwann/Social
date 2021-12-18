import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
const MainContent = React.lazy(() => import('./Components/TimeLine/MainContent'))
const Story = React.lazy(() => import('./Components/TimeLine/Story'))
const CardProfile = React.lazy(() => import('./Components/TimeLine/CardProfile'))

export default function Timeline() {
  const [img, setImg] = useState([])
  async function getImage(){
   await axios.get('https://picsum.photos/v2/list',{method:'get', headers:{ 'Content-Type': 'application/json'}})
  .then((res) =>{return res.data})
  .then(img => img.map((a) => a.download_url))
  .then(result => setImg(result))
  }
  useEffect(() =>{
    getImage()
  },[])
  console.log(img)
  return (
    <div className="grid grid-cols-5 mx-auto gap-0 w-full justify-center bg-zinc-100">
      <Suspense fallback={<div>Loading...</div>}>
      {/* 1 */}
      <div  className="col-span-1 p-5 w-96 h-4/5 rounded-b-full ">
        <CardProfile />
      </div>
      </Suspense>

      {/* 2 */}
      <Suspense fallback={<div>Loading...</div>}>
      <div className="col-span-3 flex w-auto flex-col p-8 gap-8 justify-center items-center">
      {/* <Slide> */}
      {!img ?  `Loading...` :img.map((a,i) => (<Fade key={i+1}><MainContent  img={a}/></Fade>)) }
      {/* </Slide> */}
      </div>
      </Suspense>
    
      {/* 3 */}
      <Suspense fallback={<div>Loading...</div>}>
      <div className=" col-span-1 p-5 h-667 w-auto border-0 ">
      <div className="fixed overflow-y-scroll right-36 scroll-smooth snap-y h-4/6 bg-matcha-light rounded-2xl py-4 px-6">
        <Story/>
      </div>
    </div>
</Suspense>
    </div>
  );
}
