// import reactLogo from './assets/react.svg'
import './Video.css'
import { useState } from 'react'

function Video(props) {
    const { title, channelName, img } = props
    const [likesCount, setLikesCount] = useState(0)

    const increaseLikesByOne = () => {
        // likesCount++
        setLikesCount(likesCount + 1)
        // console.log(title, likesCount)
    }

    return (
        <>
            <div className='video'>
                <img className='video-img' src={img} alt="React logo" />
                <p> {title} </p>
                <p> {channelName} </p>
                <div className='video-footer'>
                    <p> Likes: {likesCount} </p>
                    <button onClick={increaseLikesByOne}> Like </button>
                </div>
            </div>
        </>
    )
}

export default Video