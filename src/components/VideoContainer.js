import React, { useState } from 'react';

function VideoContainer({video}) {
    // console.log('from video container: ', video)
    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)
    
    const {title, views, createdAt, embedUrl} = video

    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{`${views} Views | Uploaded ${createdAt}`}</p>
            <button onClick={() => setLikes(likes + 1)}>{`${likes} 👍`} </button>
            <button onClick={() => setDislikes(dislikes + 1)}>{`${dislikes} 👎`} </button>
        </div>
    )
}

export default VideoContainer;