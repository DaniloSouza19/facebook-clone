import React, { Component } from 'react';

import PostItem from './PostItem';
import './PostList.css';

class PostList extends Component {

  render() {
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Danilo Souza",
            avatar: "https://avatars1.githubusercontent.com/u/34777856?s=400&u=875a172e3aa9a62043419b98f59f2cdb9e6bcc2b&v=4"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              },
              content: "Estamos sempre de olho, entre em contato conosco."
            },
            {
              id: 2,
              author: {
                name: "Danilo Souza",
                avatar: "https://avatars1.githubusercontent.com/u/34777856?s=400&u=875a172e3aa9a62043419b98f59f2cdb9e6bcc2b&v=4"
              },
              content: "Beleza, obrigado!"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Danilo Souza",
            avatar: "https://avatars1.githubusercontent.com/u/34777856?s=400&u=875a172e3aa9a62043419b98f59f2cdb9e6bcc2b&v=4"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              },
              content: "Estamos sempre de olho, entre em contato conosco."
            }
          ]
        },
      ]
    };

    return (
      <div className="post-list">
        {this.state.posts.map(post => ( 
          <PostItem key={post.id} {...post} />
        ))}
        
      </div>
    );
  };
}

export default PostList;