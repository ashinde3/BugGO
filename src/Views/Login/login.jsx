import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';
import './login.css';

export default () => {
    const dispatch = useDispatch();

    const [formInput,setFormInput] = useState({
        name:'',
        password:''
    })
    
    return(
        <div className='loginBG'>
            <form className='login-panel'>
               <h1> LOGIN </h1>
               <input name='name' placeholder='Name' onChange={} value={}></input>
               <input name='password' type='password' placeholder='Password' onChange={} value={}></input>
               <button type='submit' onClick={}>Login</button>
            </form>
        </div>
    );
}