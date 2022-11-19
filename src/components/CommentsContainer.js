import React from 'react';
import CommentCard from './CommentCard'

function CommentsContainer({ comments }) {

    const renderComments = comments.map(comment => <CommentCard key={comment.id} userComment={comment}/>)

    return(
        <div>
            <br/>
            <button>Hide Comments</button>
            <hr/>
            {/* <h2>Comment Container!</h2> */}
            {renderComments}
        </div>
    )
}

export default CommentsContainer;