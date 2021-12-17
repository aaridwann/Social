import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'

export default function MainContent(props) {
  const [show,setShow] = useState(false)
  const [stateComment, setStateComment] = useState(false)
    return (
        <div>
        {/* Content */}
        <div className="grid grid-cols-5 mx-auto gap-2 w-9/12 bg-white border-2 border-zinc-200 rounded-3xl px-6 py-4 ">
          {/* Profile  Top*/}
          <div className="col-span-5 bg-white border-2 border-zinc-200 rounded-3xl px-2 py-1 flex items-center gap-2">
            <figure className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-300 flex items-center ">
              <img src={props.img} alt="img" className="object-cover bg-center h-full" />
            </figure>
            <div className="flex flex-col">
              <h1 className=" font-semibold text-lg ">Ridwan</h1>
              <div className="flex gap-1 text-xs">
                <h1>jakarta,</h1>
                <h1>Indonesia</h1>
              </div>
            </div>
          </div>
          {/* EndProfile top */}

          {/* SideBar */}
          <div className="col-span-1 w-16 ">
            <div className={`${show ? 'h-96 py-6': 'h-auto py-1 px-1'}  flex flex-col gap-4 justify-between  items-center bg-matcha-light  rounded-3xl `}>
        
              <button onClick={()=>setShow(!show)} className="text-white hover:bg-matcha-dark duration-300 p-2 rounded-full">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    d="M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"
                  />
                </svg>
              </button>
        {show && 
          <Slide>
             
              <div className="flex flex-col gap-4 justify-center items-center">
                <button onClick={() => setStateComment(!stateComment)} className="text-white">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </button>
                <button className="text-white">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="-32 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                    />
                  </svg>
                </button>
                <button className="text-white">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 200 200"
                    data-name="Layer 1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path
                      fill="#fff"
                      d="M171.28,41.69a48.29,48.29,0,0,0-68.5,0l-2.5,3-2.5-2.5a48.29,48.29,0,0,0-68.5,0c-19,18.5-19,49-1,68l50,53a29.92,29.92,0,0,0,43.5,0l50.5-53.5c17.5-19.5,17-49.5-1-68Zm-14,53.5-50.5,53.5a10.26,10.26,0,0,1-14.5,0l-50-53c-10.5-11.5-10.5-29,.5-40s29-11,40.5,0l2.5,2.5c8,8,20.5,8,28,0l2.5-2.5a28.37,28.37,0,0,1,40,0,27.78,27.78,0,0,1,1,39.5Z"
                    />
                  </svg>
                </button>
              </div>
              </Slide>
            }
            </div>
          </div>
          {/* End SideBar */}

          <div className="col-span-4 flex items-center justify-center ">
            <figure className="overflow-hidden h-96 w-96  rounded-3xl">
              <img src={props.img} alt='img' className="object-cover bg-center h-full rounded-3xl "/>
            </figure>
          </div>

          <div className="bg-matcha-light col-span-5 flex gap-4 p-4 justify-end rounded-2xl font-bold text-white">
            <h1> 1k Likes</h1>
            <h1>1k Comments</h1>
          </div>

          {/* Coment Columnt */}
          {stateComment && 
          <div className="col-span-5   p-4 flex flex-col ">
            <input
              placeholder="Comment here..."
              type="text"
              name="comment"
              className="border-2 border-zinc-200 rounded-3xl p-4 focus:outline-none text-zinc-400 "
            />
            <button className=" font-semibold self-end rounded-2xl bg-zinc-300 hover:bg-zinc-500 transition duration-500 text-white px-4 py-1 mt-2 ">
              Submit
            </button>
          </div>
          }

        </div>
        </div>
    )
}
