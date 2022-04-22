import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export default function TopSide() {
    return (
        <>
            <LazyLoadComponent>
                <div id="story" style={{ WebkitScrollbars: false }} className='overflow-x-auto h-28 md:w-2/4 2xl:w-1/3 w-full snap-x z-50 fixed flex gap-4 items-center border-b-2 shadow-xl bg-white text-gray-600'>
                </div>
            </LazyLoadComponent>
        </>
    )
}
