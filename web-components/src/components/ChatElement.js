const template = document.createElement('template');
template.innerHTML = `
  <style>
    .chat-element-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
    }
    
    .right-block {
      display: flex;
      flex-direction: column;
    }

    .is-read {
      align-self: flex-end;
    }

    .left-block {
      margin-left: 10px;
    }

    .right-block {
      margin-right: 10px;
    }

    .name {
      font-size: 20px;
    }

    .message {
      font-size: 14px;
      color: gray;
    }

    .chat-element-container:hover, .chat-element-container:active {
      background-color: #f18caa;
    }

    .chat-element-container {
      animation-duration: 2s;
      animation-name: slidein;
    }
    
    @keyframes slidein {
      from {
        padding-left: 100%;
      }
    
      to {
        padding-left: 10px;
      }
    }

  </style>
  
  <div class="chat-element-container">
    <div class="left-block">
      <slot name="avatar"></slot>
    </div>
    <div class="center-block">
      <div class="name">
        <slot name="name"></slot>
      </div>
      <div class="message">
        <slot name="message"></slot>
      </div>
    </div>
    <div class="right-block">
      <slot name="right-block"></slot>
      <svg class="is-read" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="#92A58C" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
    </div>
  </div>
`;

class ChatElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$avatar = this._shadowRoot.querySelector('div.avatar');
    this.$nameAndMessage = this._shadowRoot.querySelector('div.name-and-message');
    this.$rightBlock = this._shadowRoot.querySelector('div.right-block');
  }
}

customElements.define('chat-element', ChatElement);
