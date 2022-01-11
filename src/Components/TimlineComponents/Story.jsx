import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Story(props) {
    return (
        <div className='flex flex-col snap-start items-center justify-center gap-1 font-semibold '>
            <div className='w-14 h-14 rounded-full flex items-center overflow-hidden justify-center bg-white'>
                <LazyLoadImage src={props.img} className=' object-cover h-full
                 '/>
            </div>
            <p>Cassandra</p>
        </div>
    )
}
