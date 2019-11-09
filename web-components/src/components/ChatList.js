const template = document.createElement('template');
template.innerHTML = `
  <style>
    .chat-container {
      display: flex;
      justify-content: flex-start;
    }

    .avatar {
      border-radius: 50%;
      height: 35px;
    }
    
  </style>
  
  <div class="chat-container"></div>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$main = this._shadowRoot.querySelector('div.chat-container');

    if (localStorage.getItem('messengerState')) {
      const messengerState = JSON.parse(localStorage.getItem('messengerState'));
      Object.values(messengerState.chats).forEach((element) => {
        this._createChatElement(element);
      });
    }
  }

  _createChatElement({ id, interlocutor, messages }) {
    const { text, date } = messages[0];

    const chatElement = document.createElement('chat-element');
    chatElement.setAttribute('id', `chat${id}`);

    const avatar = document.createElement('span');
    avatar.setAttribute('slot', 'avatar');
    const image = document.createElement('img');
    image.setAttribute('src', '../../img/avatar.jpeg');
    image.setAttribute('class', 'avatar');
    avatar.appendChild(image);
    chatElement.appendChild(avatar);

    const name = document.createElement('span');
    name.setAttribute('slot', 'name');
    name.textContent = interlocutor;
    chatElement.appendChild(name);
    const messageText = document.createElement('span');
    messageText.setAttribute('slot', 'message');
    messageText.textContent = text;
    chatElement.appendChild(messageText);

    const rightBlock = document.createElement('span');
    rightBlock.setAttribute('slot', 'right-block');
    rightBlock.textContent = this._dateToTime(date);
    chatElement.appendChild(rightBlock);

    this.$main.insertAdjacentElement('beforebegin', chatElement);
  }

  _dateToTime(date) {
    this.normDate = new Date(Date.parse(date));
    const hours = this.normDate.getHours();
    const minutes = this.normDate.getMinutes();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
}

customElements.define('chat-list', ChatList);
