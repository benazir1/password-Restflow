import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import "../App.css";
function Home() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('TOKEN');
    if(!token){
      navigate('/signup');
    }

  }, [])
  return (
    <div className='card'>
    <div>Home</div>
    <div>
       <span>{localStorage.getItem('email')}</span>
       <button onClick={()=>{
        localStorage.clear();
        navigate('/signIN');
       }}>Logout</button>
    </div>
    </div>
  )
}

export default Home