import React,{useState,useEffect,useContext} from 'react'
import { useParams,useNavigate } from 'react-router'
import Follow from './Follow'
import {AuthContext} from '../../Context/AuthContext'

let url = 'http://192.168.100.13:8000/user/following/'
export default function Following() {
    const navigate = useNavigate()
    const Auth = useContext(AuthContext)
    let {following} = Auth.Auth
    const params = useParams()
    const [data, setData] = useState([])
    const getData = async () =>{
        await fetch(url+params.id,{
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) =>{
            let res = data.data
            res.map((x) => {
                following.map((y) => {
                    if(x._id == y){
                        x.status = true
                    }
                })
            })
                res.map((x) => {
                    if(!x.status){
                        x.status = false
                    }
                })
               setData(res)
        })
    }

    useEffect(() => {
        getData()
    },[Auth])



    return (
    <div className=" h-screen bg-slate-50">

        <div className='flex flex-col justify-center items-center gap-4 pb-20'>
            <h1 className=' font-semibold text-slate-500 text-center text-lg'>Following</h1>
            {
            data.map((x) => (
                <Follow user={x} key={x._id} profileUser={() => navigate(`/profile/${x._id}`)} status={x.status} image={x.setting.profilePicture} name={x.name} />


                ))
            }
        </div>
    
    </div>
  )
}
