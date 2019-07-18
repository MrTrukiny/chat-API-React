import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return (
      <div class="mainbox">
        <aside class="contacts">
          <div class="user">
            <span class="state"><i class="far fa-circle"></i></span>
            <p class="name">Pedro</p>
            <i class="fas fa-ellipsis-v"></i>
          </div>
          <div class="user" id="pedro">
            <span class="state"><i class="far fa-circle"></i></span>
            <p class="name">Raphael</p>
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </aside>

        <div class="conversation">
          <div class="close-chat">
            <p>Close conversation</p>
          </div>

          <div class="chat" id="chat">
            <div class="message">
              <p class="title">
                Mauricio Orozco <span>Jul 18 17:46</span>
              </p>
              <p class="text">Eduardo, ¿estás ahí?</p>
            </div>

            <div class="message">
              <p class="title">
                Fabio Fonseca A. <span>Mayo 17 11:54</span>
              </p>
              <p class="text">Hola necesito de tu ayuda!</p>
            </div>
          </div>
          <div class="type-zone">
            <input class="send" id="send" autofocus />
            <i class="far fa-smile"></i>
          </div>
        </div>
      </div>
    )
  }

  // functions
};

export default Chat;
