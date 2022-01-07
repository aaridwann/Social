import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Content(props) {
    const loading = () => {
        return <h1>Loading anjing !</h1>
    }
    return (
        <>
         <div className='w-80 py-3 flex flex-col gap-2 justify-center items-center rounded-3xl bg-white'>
                   {/* Avatar */}
                    <div className='bg-blue-300 h-96 w-72 rounded-2xl'>
                        <LazyLoadImage beforeLoad={loading} className='h-full w-full object-cover rounded-2xl' src={props.img}/>
                    </div>


                    {/* Tools Coment */}
                    <div className=' bg-blue-300 flex justify-center items-center w-72 h-11'>
                        <div className='w-3/4 bg-yellow-300'><button>Menu</button></div>
                        <div className='bg-green-300 flex gap-2 '>
                            <button>Like</button>
                            <button>Comment</button>
                            <button>Lock</button>
                        </div>
                    </div>

                    {/* Count Comment And Like */}
                    <div className=' bg-blue-300 flex justify-end w-72 gap-2 '>
                        <button>1200 Comment</button>
                        <button>12K Like</button>
                    </div>

                    {/* Comment Input */}
                    <div className=' bg-blue-300 flex flex-col gap-2 '>
                        <input className='border-2 border-gray-400 rounded-3xl h-11 w-72' type='text'/>
                        <button className=' self-end mx-4 btn btn-sm btn-primary '>Submit</button>
                    </div>


                        {/* COmment Collom */}
                    <div className=' text-gray-700 bg-blue-300 flex flex-row w-72 gap-2 items-start justify-center'>
                        <div className=' bg-yellow-300 w-12 h-10 ml-2 rounded-full overflow-hidden '>
                            {/* <div> */}
                            <LazyLoadImage className='object-cover h-full ' src={props.img}/>
                            {/* </div> */}
                        </div>


                        <div className=' bg-purple-300 w-full flex flex-col '>
                            <button className='font-bold self-start'>Username</button>
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </div>
                    </div>




         </div>

        </>
    )
}
