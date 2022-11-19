import React from 'react';


function CommentCard({ userComment }) {
    const { user, comment } = userComment

    // console.log({userComment})

    return(
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default CommentCard;