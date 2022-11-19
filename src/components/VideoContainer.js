import React from 'react';

function VideoContainer({video}) {
    // console.log('from video container: ', video)
    const {title, views, createdAt, upvotes, downvotes, embedUrl} = video
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
            <button>{`${upvotes} 👍`}</button>
            <button>{`${downvotes} 👎`}</button>
        </div>
    )
}

export default VideoContainer;