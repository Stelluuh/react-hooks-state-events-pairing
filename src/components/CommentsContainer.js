import React from 'react';
import CommentCard from './CommentCard'

function CommentsContainer() {
    return(
        <div style={{border: "1px, solid, blue"}}>
            <h2>Comment Container!</h2>
            <CommentCard />
        </div>
    )
}

export default CommentsContainer;