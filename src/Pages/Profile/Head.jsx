import React,{Suspense,useContext} from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { AuthContext } from '../../Context/AuthContext'
import {useNavigate} from 'react-router-dom'
const FollowButton = React.lazy(() => import('../../../src/Components/Button/FollowButton'))
const UnFollowButton = React.lazy(() => import('../../../src/Components/Button/UnFollowButton'))



export default function Head({user,fetch}) {
    let navigate = useNavigate()
    const {Auth} = useContext(AuthContext)
    let {name,follower,following,statusFollow} = user
  return (
    <div className=" w-full bg-slate-50 flex items-center mx-auto pt-4 pb-8 border-b border-slate-200 overflow-hidden">
            {/* image */}
        <div className=" w-32 h-32 rounded-full object-cover overflow-hidden mx-auto">
            <LazyLoadImage className='' src={user.setting.profilePicture}/>
        </div>
        {/* Identity */}
        <div className=" flex flex-col items-center w-60 mx-auto place-items-center text-slate-500">
            <h1 className="text-2xl">{name}</h1>
            <h2 className="text-lg">Photographer</h2>

    {/* Follower Following Section */}
            <div className='flex gap-4 justify-center items-center'>
                <div className=' text-center'>
                    <h1>Follower</h1>
                    <h1>{follower.length}</h1>
                </div>
                <div onClick={() => navigate(`/following/${user._id}`)} className=' text-center'>
                    <h1>Following</h1>
                    <h1>{following.length}</h1>
                </div>
            </div>

        {/* Post Poject Item Section */}
            <div className='flex gap-8 mt-2'>
              
                <div className=' text-center'>
                    <h1>Post</h1>
                    {/* <h1>{post}</h1> */}
                </div>
                <div className=' text-center'>
                    <h1>Project</h1>
                    <h1>4000</h1>
                </div>
                <div className=' text-center'>
                    <h1>Items</h1>
                    <h1>4000</h1>
                </div>



            </div>


        {statusFollow  ? 
    <Suspense fallback={<p>Loading....</p>}>
        <UnFollowButton user={user} Auth={Auth}/>
    </Suspense>
        :
    <Suspense fallback={<p>Loading...</p>}>
        <FollowButton Auth={Auth} user={user} fetch={fetch}/>
    </Suspense>
        }

        </div>


</div>
  )
}
