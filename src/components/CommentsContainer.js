import React, { useState } from 'react';
import CommentCard from './CommentCard'

function CommentsContainer({ comments }) {
    const [showComments, setShowComments] = useState(true)

    const renderComments = comments.map(comment => <CommentCard key={comment.id} userComment={comment}/>)

    function toggleComments() {
        setShowComments(showComments => !showComments)
    
    }

    const displayComments = showComments ? ( 
    <> 
        <h2>{`${comments.length} Comments`}</h2>
        {renderComments}
    </>
    ) : null


    return(
        <div>
            <br/>
            <button onClick={toggleComments}>Hide Comments</button>
            <hr/>
            {displayComments}
        </div>
    )
}

export default CommentsContainer;