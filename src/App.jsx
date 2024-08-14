import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './components/Video'
import Header from './components/Header'
import { VIDEOS } from './videos'
import './App.css'




function App() {
  return (
    <>
      <Header />
      <div className='video-container'>


        {VIDEOS.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            channelName={video.channelName}
            img={video.img}
          />
        ))}

      </div>
    </>
  )
}

export default App
