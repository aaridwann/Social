import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Story() {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center gap-4 ">
          <div className="flex snap-center flex-col gap-0 items-center justify-center">
            <figure className="rounded-full  overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower 3.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center  overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower2.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower4.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower5.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower 3.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar Follower6.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <figure className="rounded-full snap-center overflow-hidden border-gray-600 border-x-2 w-20 h-20">
              <LazyLoadImage effect='blur' height='100%' src="./assets/img/Avatar.jpg" alt="ava" />
            </figure>
            <p className=" text-slate-200 font-semibold ">Rudi Salim</p>
          </div>
        </div>
      </div>
    )
}
