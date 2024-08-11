import reactLogo from './assets/react.svg'

function Video() {
    return (
        <>
            <div className='video'>
                <img className='video-img' src={reactLogo} alt="React logo" />
                <p> Video1 </p>
                <p> Our channel </p>
                <div className='video-footer'>
                    <p> Likes: 0 </p>
                    <button> Like </button>
                </div>
            </div>
        </>
    )
}

export default Video