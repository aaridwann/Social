import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'


export default function PostContent({post}) {
  return (

    <div className=" w-full h-full grid grid-cols-3 justify-items-center mt-8">
        {post.map((x) => (
            <div onClick={() => console.log(x)} key={x._id} className=" h-36 w-36 flex overflow-hidden place-content-center">
                <LazyLoadImage  className=" object-cover overflow-hidden  min-h-full" width='500' alt=''src={x.url}/>
            </div>
            ))}
    </div>
  )
}
