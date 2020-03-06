import React, { Component } from 'react';

import './PostItem.css';

function PostReader({ author, date  }){
  return (
    <div className="post-reader">
      <img className="avatar" src={author.avatar} alt="avatar"/>
      <div className="details">
        <strong>{author.name}</strong>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }){
  return (
    <div className="post-comments" >
      <div className="divider">
      {comments.map(comment => (
        <div key={comment.id} className="comment-content">
          <img className="avatar-comment" src={comment.author.avatar} alt="avatar"/>
          <p>
            <strong>{comment.author.name}</strong>
            {comment.content}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
      <div className="post">
        <PostReader author={author} date={date}  />
        <p className="post-content">{content}</p>
        <PostComments comments={comments}/>
      </div>
  );
}

export default PostItem;