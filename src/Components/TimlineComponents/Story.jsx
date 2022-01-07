import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Story(props) {
    return (
        <div className='flex flex-col items-center justify-center gap-1 '>
            <div className=' w-14 h-14 rounded-full flex items-center overflow-hidden justify-center bg-yellow-300'>
                <LazyLoadImage src={props.img} className=' object-cover h-full
                 '/>
            </div>
            <p>Cassandra</p>
        </div>
    )
}
