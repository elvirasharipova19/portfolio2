import React from 'react'

import './Home.css'

import photo from './photo.jpg'

export default function Home() {
  return (
    <>

    <div className="home">
          <h1 className='home__title'>Денис Новик</h1>
          <p className='home__descr'>24 года, Москва, Frontend разработчик</p>
          <img className='home__photo' src= {photo} alt="это я" />

    </div>

   
    
    
    
    </>
  )
}
