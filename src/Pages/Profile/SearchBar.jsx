import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AuthContext } from '../../Context/AuthContext'

export default function SearchBar({ search, offSearch }) {
    let { Auth } = useContext(AuthContext)
    let navigate = useNavigate()
    let [resultSearch, setResultSearch] = useState([])
    let [loading, setLoading] = useState(true)
    let [data, setData] = useState('')

    const fetchSearch = async () => {
        let identifier = { 'user': data }
        try {
            await fetch('http://192.168.100.13:8000/user/find', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(identifier)
            })
                .then((res) => res.json())
                .then((data) => (setResultSearch(data), setLoading(false)))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSearch()
        return () => {
            setData('')
        }
    }, [data])

    return (
        <div>
            {/* Search Collumnt */}
            <div className={`${search ? `flex flex-col` : `hidden`} justify-center px-4 items-center w-full 2xl:w-2/4 mt-40 2xl:top-0 fixed mx-auto`}>
                <div className='w-full h-32 gap-4 border border-slate-300 rounded-t-xl shadow-2xl bg-slate-50 flex justify-center items-center text-slate-500 '>
                    <h1 className='px-4 py-2 rounded-2xl '>Find someone</h1><input onChange={(e) => (setData(e.target.value))} className='focus:outline-none focus:border-slate-500 focus:ring-sky-500 text-center border-2 border-slate-400 rounded-xl' type="text" placeholder="Search Someone..." />
                </div>

                {/* Result Search */}
                <div className=' shadow-2xl overflow-y-auto flex flex-col justify-center items-center bg-slate-500 bg-opacity-80 gap-2 w-full max-h-58 py-2'>
                    <p className=' text-zinc-50 text-sm mb-4 font-bold '>Result</p>
                    {loading ? 'Loading...'
                        :
                        resultSearch.map((x) => (

                            <div key={x._id} onClick={() => {
                                x._id === Auth._id ? navigate(`/myprofile`) : navigate(`/profile/${x._id}`)
                                offSearch()
                                setData('')
                            }}
                                className='flex gap-2 pb-4 items-center place-items-center border-b border-slate-400 hover:text-zinc-500 hover:bg-slate-100 w-2/3 2xl:w-96 py-1'>
                                <div className='w-12 h-12 ml-16  border border-slate-50 rounded-full flex items-center justify-center overflow-hidden'>
                                    <LazyLoadImage className=' bg-center bg-cover' src={x.setting.profilePicture} />
                                </div>
                                <p className='font-bold'>{x.name}</p>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    )
}
