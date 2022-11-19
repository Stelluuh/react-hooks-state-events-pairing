import React from 'react';
import CommentCard from './CommentCard'

function CommentsContainer({ comments }) {
    
    
    // console. log('comments container: ', {comments})


    const renderComments = comments.map(comment => <CommentCard key={comment.id} userComment={comment}/>)

    return(
        <div>
            <br/>
            <button>Hide Comments</button>
            <hr/>
            <h2>{`${comments.length} Comments`}</h2>
            {renderComments}

        </div>
    )
}

export default CommentsContainer;