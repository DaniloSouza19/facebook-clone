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
          date: "04 Mar 2020",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              },
              content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!"
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
          date: "05 Mar 2020",
          content: "Fala galera! beleza? estou fazendo o Bootcamp Gostack, está sensacional! fiz a fase 2 com Nodejs no backend, agora estou na fase 3, aprendendo a construir front-end WEB com ReactJS",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              },
              content: "Show de bola Danilo!"
            },
          ]
        },
        {
          id: 3,
          author: {
            name: "Danilo Souza",
            avatar: "https://avatars1.githubusercontent.com/u/34777856?s=400&u=875a172e3aa9a62043419b98f59f2cdb9e6bcc2b&v=4"
          },
          date: "05 Mar 2020",
          content: "Pessoal, comenta ai como está sendo o bootcamp de vocês!",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
              },
              content: "Não esqueça de publicar na comunidade no discord"
            },
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