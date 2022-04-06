import {React,useState,useEffect,useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";
import {useNavigate} from 'react-router-dom'

const gambar = ['https://i.pinimg.com/564x/ea/08/d0/ea08d03d1c36f6c7097a112d0d840063.jpg','https://i.pinimg.com/564x/65/2f/42/652f422394bb879f06b1ea027176a556.jpg','https://i.pinimg.com/564x/1e/02/28/1e02282f6ec2609d9cf461623d5c6956.jpg']
export default function Registration() {
  const navigate = useNavigate()
  const [data,setData] = useState({name:'',password:'',email:'',confirmationpassword:''})
  const Auth = useContext(AuthContext)
  const [message, setMessage] = useState(false)
  const [img,setImg] = useState(gambar[0])

  const handleChange = (e) => {
    const {name} = e.target
    setData(prevState => ({...prevState,[name]:e.target.value}))
  }

  const submit = async (e) => {
    e.preventDefault()
    if(!data.name || !data.email || !data.password || !data.confirmationpassword ){
      return setMessage('Data Kosong')
    }
    if(data.confirmationpassword !== data.password){
      return setMessage('Password tidak sama')
    }else{
      setMessage('Password cocok !')
    }

    try {
      fetch('http://192.168.100.13:8000/user/adduser',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) =>  {
        setData({name:'',email:'',password:'',confirmationpassword:''})
        console.log(data);
      })
    } catch (error) { 
      console.log(error)
    }
  }

  useEffect(() => {
    let x = 0
    let time = setInterval(() =>{
      setImg(gambar[x])
      // {x > gambar.length ? x = 0 : x++}
      x++
      if(x == gambar.length) { x = 0}
    },3000)
  },[])
  useEffect(() => {
if(Auth.Auth !== null) {
  return navigate('/timeline')
}
  },[])

  return (
    <div className="w-screen h-screen mx-auto bg-slate-800">
      <div className="flex ">
       
       
        {/* Content 1 */}
        <div className=" w-full sm:w-1/3 h-667 bg-slate-100 flex flex-col justify-center items-center">
          <p className=' text-slate-500 text-2xl mb-4 '>Signup Here</p>
          
          <form onSubmit={(e) => submit(e)} className=" bg-slate-300 p-8 sm:p-12 flex flex-col gap-2 rounded shadow-md form form-control text-slate-500 ">
            <label>Name</label>{" "}
            <input
            onChange={handleChange}
              type="text"
              name="name"
              className="bg-slate-50 input input-group-xs"
            />
            <label>Email</label>{" "}
            <input
            onChange={handleChange}
              type="email"
              name="email"
              className="bg-slate-50 input input-group-xs"
            />
            <label>Password</label>{" "}
            <input onChange={handleChange}
              type="password"
              name="password"
              className="bg-slate-50 input input-group-xs"
            />
            <label>Confirmation Password</label>{" "}
            <input onChange={handleChange}
              type="password"
              name="confirmationpassword"
              className={`${data.password !== data.confirmationpassword ? `shadow-red-500 shadow-2xl` : ''} bg-slate-50 input input-group-xs`}
            />
            <button type='submit' className={` ${data.password !== data.confirmationpassword ? ` desabled cursor-not-allowed ` : ``} btn btn-sm mt-4 btn-primary `}>
              Submit
            </button>
          {message === 'Password tidak sama' && <p className="text-center font-bold text-red-500">{message}</p>}
          {message === 'Password cocok !' && <p className="text-center font-bold text-green-500">{message}</p>}
          {message === 'Data Kosong' && <p className="text-center font-bold text-red-500">{message}</p>}
         
         
          <span className=" inline ">Have account ? <p onClick={() => navigate('/')}>Login here</p></span>
          </form>

        </div>

{/* Content 2 */}
<div className=' hidden w-full h-667  overflow-hidden sm:flex justify-center items-center '>
  <img className={`bg-cover bg-center overflow-hidden w-full  `} src={img} alt='slide'/>
</div>

      </div>
    </div>
  );
}
