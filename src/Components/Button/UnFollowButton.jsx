import React,{useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'
import RefreshAuth from '../../Function/RefreshAuth'
export default  function UnFollowButton({user}) {
    let{Auth,setAuth} = useContext(AuthContext)
    const unfollow = async () => {
        await fetch(`http://192.168.100.13:8000/follow/unfollowing/${user._id}`,{
            method:'put',
            headers: {id:Auth._id}
        }).then((res) => res.json())
        .then((data) => console.log(data))
        RefreshAuth(Auth,setAuth)
    }
  return (
    <div>
        <button onClick={unfollow} className="btn btn-sm btn-primary ">Unfollow</button>
    </div>
  )
}
