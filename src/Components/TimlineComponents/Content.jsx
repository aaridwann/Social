import {React, useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Content(props) {
    const loading = () => {
        return <button class="btn text-gray-800 btn-sm btn-ghost loading">loading</button>
    }
    const [inputComment, setInputComment] = useState(false)
    const [comment, setComment] = useState(false)
    const [menu, setMenu] = useState(false)
    return (
        <>
         <div className='w-80 md:w-11/12 py-3 flex flex-col gap-2 justify-center items-center rounded-3xl bg-white border-2 border-gray-100 shadow-xl'>
                   {/* Avatar */}
                    <div className='bg-gray-200 h-96 w-72 2xl:w-11/12 rounded-2xl'>
                        <LazyLoadImage beforeLoad={() => loading()} className='h-full w-full object-cover rounded-2xl' src={props.img}/>
                    <div className={` ${menu ? `scale-100`: `scale-0`} transition duration-500 -mt-56 w-fit h-fit rounded-xl p-4 justify-center items-start text-left bg-gray-700 text-gray-200 border border-gray-200 bg-opacity-60 absolute z-50 flex flex-col gap-2`}>
                        <button className='font-bold hover:text-gray-700 transition duration-150 hover:bg-white p-2 rounded-xl'>Report</button>
                        <button className='font-bold hover:text-gray-700 transition duration-150 hover:bg-white p-2 rounded-xl'>Share</button>
                        <button className='font-bold hover:text-gray-700 transition duration-150 hover:bg-white p-2 rounded-xl'>Download</button>
                        <button className='font-bold hover:text-gray-700 transition duration-150 hover:bg-white p-2 rounded-xl'>Pinned</button>
                    </div>

                    </div>

                    {/* Tools Coment */}
                    <div className='border-b-2 text-gray-500 font-semibold border-gray-300 flex justify-center items-center w-72 2xl:w-10/12 h-11'>
                        <div onClick={() => (setMenu(!menu), setTimeout(() => {setMenu(false)},7000))} className='w-3/4'><button >Menu</button></div>
                        <div className='flex gap-2 '>
                            <button>Like</button>
                            <button onClick={() => setInputComment(!inputComment)}>Comment</button>
                            <button>Lock</button>
                        </div>
                    </div>

                    {/* Count Comment And Like */}
                    <div className=' font-semibold text-gray-500 flex justify-end w-72 2xl:w-10/12 gap-2 '>
                        <button onClick={() => setComment(!comment)}>1200 Comment</button>
                        <button>12K Like</button>
                    </div>

                    {/* Comment Input */}
                    {inputComment && 
                    <div className='flex flex-col gap-2 2xl:w-10/12 '>
                        <input className='border-2  focus:outline-none focus:ring-1 border-gray-300 rounded-xl text-gray-500 px-4 h-11 w-72 2xl:w-full' type='text'/>
                        <button className=' self-end mx-4 btn btn-sm btn-outline outline-8 hover:bg-matcha-light hover:text-matcha-dark text-matcha-dark outline-matcha-dark'>Submit</button>
                    </div>
                }

                        {/* COmment Collom */}
                        {comment && 
                    <div className=' text-gray-700 border-b-2 py-2 flex flex-row w-72 2xl:w-10/12 gap-2 items-start justify-center'>
                        <div className=' w-12 h-10 ml-2 rounded-full overflow-hidden '>
                            {/* <div> */}
                            <LazyLoadImage className='object-cover h-full ' src={props.img}/>
                            {/* </div> */}
                        </div>


                        <div className='w-full flex flex-col '>
                            <button className='font-bold self-start'>Username</button>
                            <p className='bg-gray-100 rounded-xl py-2 px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </div>
                    </div>
                }



         </div>

        </>
    )
}
