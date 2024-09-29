import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download'>
      <h1 id='app-download'>For Better Experience Download Zomato Mobile App</h1>
      <img className='app-store' src={assets.app_store} alt="" />
      <img className='play-store' src={assets.play_store} alt="" />
    </div>
  )
}

export default AppDownload
