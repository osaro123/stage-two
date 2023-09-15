import React from 'react'
import {AiOutlineInstagram,AiFillFacebook, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='flex items-center justify-center my-20 flex-col'>
        <div className='flex gap-4 mb-2 items-center'>
            <AiOutlineInstagram size={20}/>
            <AiFillFacebook size={20}/>
            <AiOutlineTwitter size={20}/>
            <AiFillYoutube size={20}/>
        </div>
        <div className='flex gap-4 my-2'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
       <p className='my-2'>&copy; 2021 MovieBox by Lawani Osaro Omobolaji</p>
    </footer>
  )
}

export default Footer