import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LazyLoadComponent, LazyLoadImage,trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const loading = <h1 className="text-center text-4xl font-bold text-matcha-dark">Loading...</h1>
const MainContent = React.lazy(() => import('./Components/TimeLine/MainContent'))
const Story = React.lazy(() => import('./Components/TimeLine/Story'))
const CardProfile = React.lazy(() => import('./Components/TimeLine/CardProfile'))

export default function Timeline() {
  const [img, setImg] = useState([])
  const [count, setCount] = useState(2)
  async function getImage(){
   await axios.get('https://jsonplaceholder.typicode.com/photos',{method:'get', headers:{ 'Content-Type': 'application/json'}})
  .then((res) =>{return res.data})
  .then(img => img.map((a) => a.url))
  .then(result => setImg(result.splice(0,count)))
  }
  useEffect(() =>{
    getImage()
  },[count])
  console.log(count)
  return (
    <div className="grid grid-cols-5 mx-auto gap-0 w-full justify-center bg-zinc-100">
      {/* 1 */}
      <div  className="col-span-1 p-5 w-96 h-4/5 rounded-b-full ">
      <Suspense fallback={loading}>
        <CardProfile />
      </Suspense>
      </div>

      {/* 2 */}
      <div className="col-span-3 flex w-auto flex-col p-8 gap-8 justify-center items-center">
      <Suspense fallback={loading}>
          {!img ?  `Loading...` : img.map((a,i) => (<Fade key={i+1}>
          <LazyLoadComponent delayTime={9000} >
          <MainContent img={a}/>
          </LazyLoadComponent>
          </Fade>)) 
          }
          <button onClick={() => setCount(count+5)} className="btn text-white font-bold bg-matcha-light p-4 rounded-3xl">Load More...</button>
          <button onClick={() => setCount(1)} className="btn text-white font-bold bg-matcha-light p-4 rounded-3xl">reset...</button>
      </Suspense>
      </div>
    


      {/* 3 */}
      <div className=" col-span-1 p-5 h-667 w-auto border-0 ">
      <div className="fixed overflow-y-scroll right-36 scroll-smooth snap-y h-4/6 bg-matcha-light rounded-2xl py-4 px-6">
      <Suspense fallback={loading}>
        <Story/>
      </Suspense>
      </div>
    </div>
    </div>
  );
}
