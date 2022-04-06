import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function AddPost(props) {
  const {_id} = useContext(AuthContext).Auth
  const [Image, setImage] = useState();
  const [ImgPreview, setImgPreview] = useState("");
  const [caption,setCaption]= useState('')
  const [message, setMessage] = useState('')
  const [load,setLoad] = useState(false)
  const handleImage = (e) => {
    setImgPreview(URL.createObjectURL(e));
    setImage(e);
  };
  const [modal, setModal] = useState(true)
  const submit = async() => {
    setLoad(true) 
    let formData = new FormData()
    formData.append('image',Image)
    formData.append('caption',caption)
    try{
      await fetch('http://192.168.100.13:8000/post/add',{
        method:'POST',
        body:formData,
        headers:{'userId':_id}
      }).then((res) => res.json())
     .then((res) => {
      setLoad(false)
      setMessage(res.message)
      setCaption('')
      console.log(message)
      setImage()
      props.refresh()
     })
     
    }
    catch(err){
      console.log(err.json());
    }
  }
  return (
    <div className={`transition duration-150 w-full h-full z-100 fixed flex flex-col justify-center items-center`}>
      {/* <h1>Add Post</h1>  */}
        <button onClick={props.onClick} className="absolute right-10 top-24 text-2xl font-bold bg-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-500 w-8 h-9 rounded-lg">X</button>     
      <div className="w-11/12 h-4/5 bg-slate-500 rounded-xl py-10 grid grid-rows-2 mx-auto">
        <div className="w-full row-span-1 mx-auto mb-4 py-4 flex justify-center items-center">
          {Image ? (
            <div id="imgpreview"className="w-full h-60 flex flex-col justify-center items-center overflow-hidden rounded-xl ">
              <div className=" w-72 h-60 overflow-hidden flex justify-center gap-2 items-center">
              {load ? 
              <button className="btn btn-sm btn-ghost absolute  loading z-100">loading</button>
              : 
                <img src={ImgPreview} className="rounded-xl bg-center" />
              }
              </div>
              <button
                onClick={() => {
                  setImage("");
                  setImgPreview("");
                }}
                className=" hover:bg-red-500 w-20 h-8 mt-1 rounded-xl bg-slate-200 text-slate-50 bg-opacity-40"
              >
                close
              </button>
            </div>
          ) : (
          <>
          {message && <p className="absolute top-28 bg-slate-50 px-4 py-1 rounded-xl bg-opacity-50">{message}</p>}
          <button className="text-6xl w-20 pb-3 border-2 border-slate-100 mx-auto hover:bg-white text-slate-100 hover:text-slate-400 rounded-xl">
              <input
                name="image"
                onChange={(e) => handleImage(e.target.files[0])}
                className=" absolute opacity-0 left-32 w-32"
                type="file"
                />
              +
            </button>
                <p className=" absolute mt-40">Choose your photo</p>
                </>
          )
          }
        </div>

      {/* Right Side  */}
        <div className=" border-stone-50 border-t-2 px-4 w-full row-span-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">your mind !</span>
            </label>
            <textarea
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
              className="textarea bg-stone-50 text-stone-600 h-24 textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          <button onClick={submit} className=" btn btn-md text-xl text-white btn-success float-right mt-4">Send</button>
        </div>

      </div>
    </div>
  );
}
