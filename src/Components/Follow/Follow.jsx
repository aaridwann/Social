import React,{Suspense} from 'react'
const UnFollowButton = React.lazy(() => import('../Button/UnFollowButton'))

export default function Follow({user, name,image,profileUser,status}) {
  // console.log(user);
  return (
    <div className="grid grid-cols-3 gap-1 items-center bg-slate-200 px-4 py-2 rounded-xl w-80">
        <div className="w-20 h-20 overflow-hidden rounded-full object-cover ">
            <img className=" bg-center" src={image} alt='test'/>
        </div>

        <div className='flex flex-col gap-1 text-slate-500'>
            <p onClick={profileUser} className='text-xl flex flex-wrap'>{name}</p>
            <p className='text-sm'>Realname</p>
        </div>
        {status  ? 
        <Suspense fallback={<p>Loading...</p>}>
          <UnFollowButton user={user}/>
        </Suspense>
        
        // <button className='btn btn-xs btn-secondary w-20 justify-self-end'>Test</button>
        :
        <button className='btn btn-xs btn-secondary w-20 justify-self-end'>Follow</button>
        }

    </div>
  )
}
