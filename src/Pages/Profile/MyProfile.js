import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { dataProject } from '.././../Data/Profiledata'
import ViewPost from '../../Components/View Post/ViewPost'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function MyProfile() {
    let navigate = useNavigate()
    const { Auth } = useContext(AuthContext)
    const [setting, setSetting] = useState(false)
    const [content, setContent] = useState('post')
    const [preview, setPreview] = useState({})
    const [user, setUser] = useState()
    const [data, setData] = useState()
    const [search, setSearch] = useState(false)
    const [resultSearch, setResultSearch] = useState([])
    const [message, setMessage] = useState('')
    const [postData, setPostData] = useState([])


    const fetchData = async () => {
        try {
            await fetch(`http://192.168.100.13:8000/user/${Auth._id}`)
                .then((res) => res.json())
                .then((data) => setUser(data))
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSearch = async () => {
        let identifier = { 'user': data }
        try {
            await fetch('http://192.168.100.13:8000/user/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(identifier)
            })
                .then((res) => res.json())
                .then((data) => setResultSearch(data))
        } catch (error) {
            console.log(error)
        }
    }
    const fetchPost = async () => {
        try {
            await fetch(`http://192.168.100.13:8000/post/${Auth._id}`)
                .then((res) => res.json())
                .then((data) => setPostData(data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
        fetchPost()
        return function () {
            setUser([])
            setPostData([data])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetchSearch()
        return () => {
            setResultSearch([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])


    const testLoad = async (e, x) => {
        let lebar = await e.target.naturalWidth
        let tinggi = await e.target.naturalHeight
        let res = 'landscape'
        if (lebar < tinggi) {
            res = 'potrait'
        } else if (lebar === tinggi) {
            res = 'square'
        }
        x.position = res


    }

    // Content Map
    function conten(postData, dataProject) {
        let res;
        if (content === 'post') {
            res = postData
        } else {
            res = dataProject
        }
        return (res.map((x) => {
            return (
                <div key={x._id} className='w-32 h-32 lg:w-full lg:h-64 2xl:w-full 2xl:h-92 flex border-2 overflow-hidden shadow-xl'>
                    <LazyLoadImage key={x._id} onLoad={(e) => testLoad(e, x)} className={`object-cover min-h-full hover:scale-105`} width='500' onClick={() => setPreview({ data: x.url, status: true })} src={x.url} />
                </div>)
        }
        ))

    }
    const setProfilePicture = async (e) => {
        let header = {
            '_id': Auth._id,
            'image': e
        }
        try {
            await fetch('http://192.168.100.13:8000/setting/settingPictureProfile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(header),
            })
                .then((res) => res.json())
                .then((data) => {
                    fetchData()
                    setMessage('Profile picture has been change')
                })
        } catch (error) {
            console.log(error);
        }
    }
    setTimeout(() => {
        setMessage('')
    }, 10000)

    return (<>
        {user ?
            <div className='h-auto bg-slate-50 pb-52 xl:w-3/4 2xl:w-1/2 mx-auto'>
                <title>My Profile</title>
                <div className='container flex flex-col justify-center items-center mx-auto '>

                    {/* Head */}
                    <div className='container flex gap-2 px-4 justify-center items-center w-full bg-slate-50 h-48'>
                        <div id='avatar' className=' flex justify-center items-center object-cover w-40 h-40 overflow-hidden rounded-full bg-slate-200'>
                            <LazyLoadImage className='object-cover w-56 h-56' src={user ? user.setting.profilePicture : ''} />
                        </div>

                        <div id='foll' className='flex flex-col w-60 h-40 border-2 rounded-xl border-slate-200'>
                            <div className='flex flex-col justify-center items-center text-slate-400'>
                                <p className=' text-xl font-semibold'>{user.name}</p>
                                <p className=' text-xs'>Designer UI/UX</p>
                            </div>

                            <div className='flex justify-center items-center gap-2 text-slate-400'>
                                <div className=' flex flex-col justify-center items-center'>
                                    <p onClick={() => navigate(`/followers/${user._id}`)}>Followers</p>
                                    <p className=' font-semibold'>{user.follower.length}</p>
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <p onClick={() => navigate(`/following/${user._id}`)}>Following</p>
                                    <p className=' font-semibold'>{user.following.length}</p>
                                </div>
                            </div>

                            <div className=' text-slate-400 gap-4 flex justify-center items-center'>
                                <div className=' flex flex-col items-center justify-center'>
                                    <p>Post</p>
                                    <p className=' font-semibold'>{postData.length}</p>
                                </div>
                                <div className=' flex flex-col items-center justify-center'>
                                    <p>Project</p>
                                    <p className=' font-semibold'>500</p>
                                </div>
                                <div className=' flex flex-col items-center justify-center'>
                                    <p>Sales</p>
                                    <p className=' font-semibold'>7.500</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Setting */}
                    <div id='seting' className={`${setting ? ` h-20` : ` h-6`} rounded-2xl transition-transform duration-200 w-9/12 lg:w-1/4 2xl:w-1/4 px-4 shadow-inner hover:shadow-indigo-300 bg-slate-200 `}>
                        <button onClick={() => setSetting(!setting)} className=' text-slate-400 mx-auto block font-bold text-sm mt-1'>Setting</button>
                        <div className=' flex gap-4 mt-4 justify-between items-center'>
                            <button className=' btn btn-sm bg-slate-400 border-0 hover:border hover:bg-slate-200 hover:text-slate-500'>Privacy</button>
                            <button className='btn btn-sm bg-slate-400 border-0 hover:border hover:bg-slate-200 hover:text-slate-500'>Account</button>
                            <button className='btn btn-sm bg-slate-400 border-0 hover:border hover:bg-slate-200 hover:text-slate-500'>Other</button>
                        </div>
                    </div>
                    {/* Content */}
                    <div onClick={() => setPreview(preview.status = false)} className='text-slate-500 font-bold w-full sm:w-9/12 px-4 h-full bg-slate-50'>
                        <div className=' h-14 w-full flex justify-around items-center border mt-2 border-slate-100'>
                            <button onClick={() => setContent('post')} className='h-full w-32 bg-slate-200 rounded-t-lg hover:bg-slate-300 text-2xl'>post</button>
                            <button onClick={() => setContent('project')} className='h-full w-32 bg-slate-200 rounded-t-lg hover:bg-slate-300 text-2xl'>project</button>
                            <button onClick={() => setContent('sales')} className='h-full w-32 bg-slate-200 rounded-t-lg hover:bg-slate-300 text-2xl'>sales</button>
                        </div>


                        {/* Content */}
                        <div className='grid grid-cols-3 h-auto bg-slate-50 place-items-center'>
                            {conten(postData, dataProject)}
                        </div>
                    </div>


                    {/* Bottom */}
                    <div className='w-full pb-4 text-xs font-bold flex justify-center content-center gap-8 items-center h-20 mx-auto px-8 bottom-0 fixed text-slate-600 bg-slate-400 from-zinc-200 bg-gradient-to-tr'>
                        <button onClick={() => navigate('/timeline')}>Timeline</button>
                        <button>Notification</button>
                        <button onClick={() => setSearch(!search)}>Search</button>
                        <button onClick={() => navigate('/market')}>Market</button>
                    </div>


                    {/* View Page Modal */}
                    <div className='fixed bottom-40 lg:bottom-10 shadow-2xl z-50 '>
                        {message === 'Profile picture has been change' && <p className=' text-slate-500 text-center bg-slate-50 p-2'>{message}</p>}
                        {preview.status && <ViewPost setProfilePicture={(e) => setProfilePicture(preview.data)} image={preview.data} />}
                    </div>

                    {/* Search Collumnt */}
                    <div className={`${search === true ? `flex flex-col` : `hidden`}  top-0 justify-center px-4 items-center w-full 2xl:w-2/4 mt-40 2xl:top-0 fixed mx-auto`}>
                        <div className='w-full h-32 gap-4 border border-slate-300 rounded-t-xl shadow-2xl bg-slate-50 flex justify-center items-center text-slate-500 '>
                            <h1 className='px-4 py-2 rounded-2xl '>Find someone</h1><input onChange={(e) => (setData(e.target.value))} className='focus:outline-none focus:border-slate-500 focus:ring-sky-500 text-center border-2 border-slate-400 rounded-xl' type="text" placeholder="Search Someone..." />
                        </div>

                        {/* Result Search */}
                        <div className=' shadow-2xl overflow-y-auto flex flex-col justify-center items-center bg-slate-500 bg-opacity-80 gap-2 w-full max-h-58 py-2'>
                            <p className=' text-zinc-50 text-sm mb-4 font-bold '>Result</p>
                            {resultSearch.map((x) => (

                                <div key={x._id} onClick={() => navigate(`/profile/${x._id}`)} className='flex gap-2 pb-4 items-center place-items-center border-b border-slate-400 hover:text-zinc-500 hover:bg-slate-100 w-2/3 2xl:w-96 py-1'>
                                    <div className='w-12 h-12 ml-16  border border-slate-50 rounded-full flex items-center justify-center overflow-hidden'>
                                        <img alt={x._id} className=' bg-center bg-cover' src={x.setting.profilePicture} />
                                    </div>
                                    <p className='font-bold'>{x.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            : <p className='text-zinc-600 text-lg text-center '>Loading...</p>}
    </>
    )
}
