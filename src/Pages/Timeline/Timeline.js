import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import Content from '../../Components/TimlineComponents/Content'
import SideBar from '../../Components/TimlineComponents/SideBar'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import AddPost from '../../Components/Add Post/AddPost'
import { AuthContext } from '../../Context/AuthContext'
import Notif from '../../Components/Notif Modal/Notif'
import TopSide from './TopSide';
import{socket,likeService} from  '../../Services/NotificationService'




let url = 'http://192.168.100.13:8000/post/timeline'


export default function Timeline() {
  let navigate = useNavigate();
  const { Auth } = useContext(AuthContext)
  const [dataNotif, setDataNotif] = useState([])
  const [stateNotif, setStateNotif] = useState(false)
  const { name,_id } = Auth
  const [nav, setNav] = useState(false)
  const [img, setImg] = useState([])
  const [addPost, setAddPost] = useState(false)

  // Fetch Data Timeline
  const getData = async () => {
    const headers = {
      id: _id,
      'Content-Type': 'application/json'
    }
    try {
      await axios.get(url, { headers: headers })
        .then(res => res.data.data.map((a) => a))
        .then((response) => {
          setImg(response)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  // Emit like
  const like = (a) => {
    const data = { idPost: a._id, idUser: a.userId, from: name }
    likeService(data)
  }

  // UseEffect fetch
  useEffect(() => {
    // socket()
    getData()
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Auth])

  return (
    <div className='grid grid-cols-4 w-full shadow-xl md:w-2/4 2xl:w-1/3 mx-auto overflow-x-hidden bg-gray-200 h-full'>
      {dataNotif &&
        <div className={`${stateNotif ? `opacity-100` : `opacity-0`} transition duration-300 fixed`}>
          <Notif clear={() => setDataNotif([])} data={dataNotif} closeButton={() => setStateNotif(false)} />
        </div>
      }

      {/* Top */}
      <div className='col-span-4 h-20 flex justify-center items-start'>
        <TopSide />
      </div>

      {/* Side Bar */}
      <div onClick={() => setNav(false)} className='col-span-1 w-16 h-20  '>
        <div className='fixed mt-4 md:left-1/4 2xl:left-1/3 justify-start items-center flex w-16 h-667 md:h-3/4  overflow-x-hidden '>
          <SideBar openNotif={() => setStateNotif(!stateNotif)} />
        </div>
      </div>

      {/* content */}
      <div onClick={() => setNav(false)} className='col-span-3 h-fit w-80 -ml-8 md:w-3/4 '>
        <div className='flex scroll-smooth flex-col gap-4 mt-12 items-center justify-center'>
          <LazyLoadComponent>
            {img.map((a) => (<Content profile={a.post.userId === Auth._id ? () => navigate('/myprofile') : () => navigate(`/Profile/${a.post.userId}`)} 
            profilePicture={a.user.setting.profilePicture} 
            username={a.user.name} 
            like={() => like(a.post)} 
            key={a.post._id} 
            img={a.post.url} />))}
          </LazyLoadComponent>
        </div>
      </div>

      {/* Botom */}
      <div className='w-56 h-56 p-4 md:left-1/4 2xl:left-1/3 fixed bottom-0 flex items-center justify-center col-span-4 overflow-hidden '>
        <div style={{ transitionDuration: '0.5s' }} className={`${nav ? `bg-gray-400 text-white w-60 h-60 bg-opacity-60` : `bg-white text-gray-500 w-32 h-32 bg-opacity-100`} z-40  -ml-52 -mb-52  border-2 border-gray-100  flex justify-center items-center rounded-full`}>
          <button onClick={() => {
            setNav(!nav)
            setTimeout(() => { setNav(false) }, 7000)
          }} className='mb-8 ml-8 text-2xl font-bold'>
            NAV
          </button>
        </div>
        <button style={{ transitionDuration: '0.4s', transitionDelay: '0.3s' }} className={`${nav ? `left-8 top-10` : `-left-2 top-48`} text-gray-500 font-bold absolute`}>Home</button>
        <button onClick={() => navigate('/myprofile')} style={{ transitionDuration: '0.4s', transitionDelay: '0.4s' }} className={`${nav ? `left-28 top-16 ` : `-left-4 top-48`} text-gray-500 font-bold absolute`}>Profile</button>
        <button style={{ transitionDuration: '0.4s', transitionDelay: '0.5s' }} className={`${nav ? `left-40 top-36` : `-left-4 top-48`} text-gray-500 font-bold absolute `}>About</button>

      </div>

      {/* Right Bottom Add */}

      <div className='w-48 h-24 fixed bottom-0 -right-10 2xl:right-1/3 flex justify-center '>
        <button onClick={() => setAddPost(!addPost)} className='btn btn-mf text-white font-bold my-auto '>Add Post</button>
      </div>
      <div className={`${addPost ? `scale-100` : `scale-0`} w-full h-full z-100 fixed transition duration-200`}>
        <AddPost refresh={() => getData()} onClick={() => setAddPost(!addPost)} className={addPost ? `scale-100` : `scale-0`} />
      </div>
    </div>
  )
}
