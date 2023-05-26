import React, { useState } from 'react';
import LargeButton from '../../Component/LargeButton/LargeButton';
import AppNav from '../../Component/AppNav/AppNav';
import TextFeild from '../../Component/TextFeild/TextFeild';


export default function HomePage() {
  const[email,setEmail]=useState("");
  return (
    <div>
        <input value={email} onChange={(e)=>{
          setEmail(e.target.value);
          console.log(email);
        }} placeholder="Email"/>
    </div>
  )
}
