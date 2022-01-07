import React, { useState } from 'react'

export default function SideBar() {
    const [menu, setMenu] = useState(false)

    return (
        <>
        <div on style={{transitionDuration:"0.5s", transitionDelay:'0.1s'}} className={`${menu ? `h-4/5 -mt-8`: ` h-16 -mt-2`} md:h-5/6 md:py-4 w-16  rounded-tr-extra rounded-br-extra bg-mathca flex flex-col justify-center gap-8 items-center`}>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.6s"}} ><img  className="w-14 h-14 transition duration-200 hover:scale-110" src='../assets/timeline/Notification.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.7s"}}><img className='w-14 h-14 transition duration-200 hover:scale-110' src='../assets/timeline/Profile Button.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.8s"}}><img className='w-14  h-14 transition duration-200 hover:scale-110' src='../assets/timeline/Followers.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"0.9s"}}><img className='w-14 h-14 transition duration-200 hover:scale-110' src='../assets/timeline/Followers-1.svg' alt='notif'/></button>
           <button className={`${menu ? `-ml-0` :`-ml-40`}`} style={{transitionDuration:"0.4s", transitionDelay:"1s"}}><img className='w-8 h-8 transition duration-200 hover:scale-110' src='../assets/timeline/Setting.svg' alt='notif'/></button>
            <button  onClick={() => setMenu(!menu)} style={{transitionDuration:"1s", transitionDelay:"0.9s"}}   className={`${!menu ? `bottom-80`:`bottom-28`} absolute`} ><img className='h-7 w-7 transition duration-200 hover:scale-110' src='../assets/timeline/Menu.svg' alt='notif'/></button>
        </div>
        </>
    )
}
