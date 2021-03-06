const template = document.createElement('template');
template.innerHTML = `
  <style>
    form-input {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .result {
      color: black;
    }

    input[type=submit] {
      visibility: collapse;
    }

    .container {
      color: black;
      box-sizing: border-box;
      padding: 0;
      background-color: #fffafa;
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      justify-content: flex-end;
    }

    .animation {
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-name: slidein;
    }

    @keyframes slidein {
      from {
        margin-right: 40%;
      }

      to {
        margin-right: 12px;
      }
    }
  </style>

  <div class="container">
    <form class="mess-form">
      <form-input name="message-text" class="message-input" placeholder="Введите сообщеине"></form-input>
    </form>
  </div>
`;

class MessageContainer extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('abc');

    const messengerState = JSON.parse(localStorage.getItem('messengerState'));

    this.chatId = messengerState.chats.findIndex((elem) => {
      if (elem.id === Number(this.id)) {
        return true;
      }
      return undefined;
    });

    if (localStorage.getItem('messengerState')) {
      const message = JSON.parse(localStorage.getItem('messengerState'));
      message.chats[this.chatId].messages.forEach((element) => {
        this._createMessageElement(element);
      });
    }
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$main = this._shadowRoot.querySelector('.container');
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _getIdMess() {
    if (this._mess_id) {
      this._mess_id += 1;
    } else {
      this._mess_id = 1;
    }
    return this._mess_id;
  }

  _onSubmit(event) {
    if (this.$input.value === '') {
      return;
    }

    event.preventDefault();

    const messengerState = JSON.parse(localStorage.getItem('messengerState'));
    const { value } = this.$input;
    const date = new Date();

    messengerState.chats[this.chatId].messages.push({
      direction: 'fromMe',
      text: value,
      date,
      isRead: true,
    });

    const len = messengerState.chats[this.chatId].messages.length;
    this._createMessageElement(messengerState.chats[this.chatId].messages[len - 1]);

    localStorage.setItem('messengerState', JSON.stringify(messengerState));
    this.$input.value = '';
    this.$input.scrollIntoView(false);
  }

  _createMessageElement({ text, date }) {
    const normDate = new Date(Date.parse(date));
    const hours = normDate.getHours();
    const minutes = normDate.getMinutes();
    const formatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const messageElement = document.createElement('message-element');
    messageElement.classList.add('animation');
    messageElement.addEventListener('animationend', this._listener, false);

    const messageText = document.createElement('span');
    messageText.setAttribute('slot', 'message');
    messageText.textContent = text;
    messageElement.appendChild(messageText);

    const messageDate = document.createElement('span');
    messageDate.setAttribute('slot', 'date');
    messageDate.textContent = formatedTime;
    messageElement.appendChild(messageDate);

    this.$form.insertAdjacentElement('beforebegin', messageElement);
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  _listener(e) {
    if (e.type === 'animationend') {
      this.classList.remove('animation');
    }
  }
}

customElements.define('message-container', MessageContainer);
