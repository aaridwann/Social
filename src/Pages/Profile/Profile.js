import React, { useState, useEffect, Suspense, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { checkFollow } from '../../Function/CheckFollow'

const Head = React.lazy(() => import('../Profile/Head'))
const PostContent = React.lazy(() => import('./PostContent'))
const SearchBar = React.lazy(() => import('./SearchBar'))
const BottomBar = React.lazy(() => import('./BottomBar'))

export default function Profile() {
    const { Auth } = useContext(AuthContext)
    let params = useParams()
    let [loading, setLoading] = useState(true)
    let [user, setUser] = useState([])
    let [postUser, setPostUser] = useState([])
    let [stateSearch, setStateSearch] = useState(false)


    const getUser = async () => {
        await fetch(`http://192.168.100.13:8000/user/${params.id}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                let res = checkFollow(Auth, data)
                setUser(res)
                setLoading(false)
            }
            );
    }
    const getPostUser = async () => {
        try {
            await fetch(`http://192.168.100.13:8000/post/${user._id}`, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    setPostUser(data)
                    setLoading(false)
                });
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])
    useEffect(() => {
        getPostUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className='w-full h-fit overflow-y-scroll pb-28 overflow-x-hidden'>
            <title>{user.name} Profile</title>

            <div className=" flex flex-col gap-4 bg-slate-50 w-full ">
                {/* Head */}
                {loading ?
                    <p className=" flex justify-center mt-8 items-center text-slate-500 text-2xl text-center">Loading...</p>
                    :
                    <Suspense fallback={<p>Loading...</p>}>
                        <Head user={user} fetch={() => getUser()} />
                    </Suspense>
                }

                {/* Content */}
                {loading ?
                    <p className=" flex justify-center mt-8 items-center text-slate-500 text-2xl text-center">Loading...</p>
                    :
                    <Suspense fallback={<p>Loading...</p>}>
                        <PostContent post={postUser} />
                    </Suspense>
                }

                {/* Bottom Bar */}
                <div className=" fixed bottom-0 w-full">
                    <Suspense fallback={<p>Loading...</p>}>
                        <BottomBar activeSearch={() => setStateSearch(!stateSearch)} />
                    </Suspense>
                </div>

                {/* Search Section */}
                <div className=" fixed">
                    <Suspense fallback={<p>Loading...</p>}>
                        <SearchBar search={stateSearch} offSearch={() => setStateSearch(false)} />
                    </Suspense>
                </div>

            </div>

        </div>
    )
}
