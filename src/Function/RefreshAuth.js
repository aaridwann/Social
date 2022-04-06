import{React,useContext} from "react";
import {AuthContext} from '../Context/AuthContext'
import axios from 'axios';

export default async function RefreshAuth (Auth,setAuth)  {

    let res = await axios.get(`http://192.168.100.13:8000/user/${Auth._id}`)
   setAuth(res.data)
   sessionStorage.setItem('user',JSON.stringify(res.data))
return console.log('sukses Refresh');
    
    
}