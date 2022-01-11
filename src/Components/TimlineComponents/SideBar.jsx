import React, { useState } from 'react'

export default function SideBar() {
    const [menu, setMenu] = useState(false)
    function menuHandler(){
        setMenu(!menu)
        setTimeout(() => {
            setMenu(false)
        },7000)
    }
    return (
        <>
        <div on style={{transitionDuration:"0.5s", transitionDelay:'0.1s'}} className={`${menu ? `h-4/5 -mt-8 bg-gray-400`: `h-16 md:h-12 -mt-2 bg-gray-300`} md:h-5/6 md:py-4 w-16 rounded-tr-extra rounded-br-extra hover:bg-gray-400 flex flex-col justify-center gap-8 md:gap-4 items-center`}>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.6s"}} ><img  className="w-14 h-14 md:w-12 md:h-12 transition duration-200 hover:scale-110" src='../assets/timeline/Notification.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.7s"}}><img className='w-14 h-14 md:w-12 md:h-12 transition duration-200 hover:scale-110' src='../assets/timeline/Profile Button.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.8s"}}><img className='w-14 h-14 md:w-12 md:h-12 transition duration-200 hover:scale-110' src='../assets/timeline/Followers.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.9s"}}><img className='w-14 h-14 md:w-12 md:h-12 transition duration-200 hover:scale-110' src='../assets/timeline/Followers-1.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"1s"}}><img className='w-8 h-8 md:h-6 md:w-6 transition duration-200 hover:scale-110' src='../assets/timeline/Setting.svg' alt='notif'/></button>
        <button onClick={menuHandler} style={{transitionDuration:"1s", transitionDelay:"0.9s"}}   className={`${!menu ? `top-80 md:top-52 2xl:top-80`:`top-20 md:top-8 2xl:top-20 `} absolute`} ><img className='h-7 w-7 transition duration-200 hover:scale-110 -mt-1 md:mt-2 2xl:mt-3' src='../assets/timeline/Menu.svg' alt='notif'/></button>
        </div>
        </>
    )
}
