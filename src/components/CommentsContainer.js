import React from 'react';
import CommentCard from './CommentCard'

function CommentsContainer({ comments }) {

    const renderComments = comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)

    return(
        <div>
            <h2>Comment Container!</h2>
            {renderComments}
        </div>
    )
}

export default CommentsContainer;