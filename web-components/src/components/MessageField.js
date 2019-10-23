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
      box-sizing: border-box;
      padding: 0;
      background-color: #fffafa;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      justify-content: flex-end;
    }
    
    message-element {
      background-color: #ffdfcf; /*#ffc0cb;*/
      border-radius: 5px;
      margin: 10px;
      margin-right: 12px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      position: relative;
      max-width: 60%;
    }

    message-element::after {
      content: '';
      position: absolute;
      right: -12px;
      bottom: 0px;
      border: 7px solid transparent;
      border-left: 9px solid #ffdfcf;
    }

    .hat {
      width: 100%;
      background: #f19cbb;
      height: 100px;
      position: fixed;
      top: 0;
      z-index: 1;
    }
    
    </style>
  
  <div class="hat"></div>
  <div class="container">
    <form class="mess-form">
      <form-input name="message-text" class="message-input" placeholder="Введите сообщеине"></form-input>
    </form>
  </div>
`;

class MessageField extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    if (localStorage.getItem('messenegerState')) {
      const message = JSON.parse(localStorage.getItem('messenegerState'));
      message.chats[0].forEach((element) => {
        this._createMessageElement(element);
      });
    }
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

    let message = JSON.parse(localStorage.getItem('messenegerState'));

    const { value } = this.$input;
    const date = new Date();

    if (!message) {
      message = {
        chats: {
          '0': [
            {
              sender: 'a',
              recipient: 'b',
              text: value,
              date,
              isRead: true,
            },
          ],
        },
      };
    } else {
      message.chats['0'].push({
        sender: 'a',
        recipient: 'b',
        text: value,
        date,
      });
    }
    const len = message.chats[0].length;
    this._createMessageElement(message.chats[0][len - 1]);

    localStorage.setItem('messenegerState', JSON.stringify(message));

    this.$input.value = '';
    this.$input.scrollIntoView(false);
  }

  _createMessageElement({ text, date }) {
    const normDate = new Date(Date.parse(date));
    const hours = normDate.getHours();
    const minutes = normDate.getMinutes();
    const formatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const messageElement = document.createElement('message-element');

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
}

customElements.define('message-container', MessageField);
