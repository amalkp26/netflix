import React, { useEffect, useState } from 'react'
import './Nav.css'


function Navbar() {

//create state
const [show,setshow]=useState(false)

useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY>350){
    setshow(true)
  }
  else{
    setshow(false)
  }
})
},[])
console.log(show); 
  return (
    <div className={`Nav ${show && 'navblack'}`}>
      <img className='logo' src="https://i.postimg.cc/Vky9362z/pngwing-com.png" alt="" />
    </div>
  )
}

export default Navbar
