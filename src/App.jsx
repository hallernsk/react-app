import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Video/Video'
import { VIDEOS } from './videos'
import './App.css'

function App() {
  return (
    <>
      <div className='video-container'>
        {/* <Video title="Video14" channelName="MyChannel" img={reactLogo} /> */}
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
