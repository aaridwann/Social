import axios from 'axios'
import React,{useContext,useState} from 'react'
import {AuthContext} from '../../Context/AuthContext'


export default function FollowButton({user,fetch}) {
  const { Auth, setAuth } = useContext(AuthContext);
  console.log(Auth)
let{_id} = user


const refreshAuth = async () => {
  let res = await axios.get(`http://192.168.100.13:8000/user/${Auth._id}`)
  let {data} = res
  sessionStorage.setItem('user',JSON.stringify(data))
  setAuth(data);
  console.log(data);
}

const follow = async () => {
  let res =  await axios({url:`http://192.168.100.13:8000/follow/following/${_id}`,
  headers: {id:Auth._id},
    method:'put',
  }).then((res) => {
    fetch()
    refreshAuth()
  })
}

    return (
    <div>
        <button onClick={follow} className="btn btn-sm btn-primary">Follow</button>
    </div>
  )
}
