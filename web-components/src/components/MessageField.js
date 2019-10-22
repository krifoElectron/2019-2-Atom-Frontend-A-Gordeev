const template = document.createElement('template');
template.innerHTML = `
  <style>
    form-input {
      width: 100%;
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
    
    message-mess {
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

    message-mess::after {
      content: '';
      position: absolute;
      right: -12px;
      bottom: 0px;
      border: 7px solid transparent;
      border-left: 9px solid #ffdfcf;
    }
    form-input {
      display: flex;
      flex-direction: row;
    }
    </style>

  <div class="container">
    <form class="mess-form">
      <form-input name="message-text" class="message-input" placeholder="Введите сообщеине"></form-input>
    </form>
  </div>
`;

class MessageField extends HTMLElement {
constructor () {
  super();
  this._shadowRoot = this.attachShadow({ mode: 'open' });
  this._shadowRoot.appendChild(template.content.cloneNode(true));
  this.$form = this._shadowRoot.querySelector('form');
  this.$input = this._shadowRoot.querySelector('form-input');
  // this.$message = this._shadowRoot.querySelector('.result');
  this.$form.addEventListener('submit', this._onSubmit.bind(this));
  this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  let i = 1;
  while (localStorage.getItem(i)) {
    const message =JSON.parse(localStorage.getItem(i));
    console.log(i, message, '1');
    console.log(i, message.text, '1');
    // const mess = document.createElement('div');
    // mess.classList.add('mess-element');
    // mess.innerHTML = localStorage.getItem(i);
    // this.$form.insertAdjacentElement('beforebegin', mess);
    const mess2 = document.createElement('message-mess');
    // mess2.classList.add('mess-element');
    // mess2.innerHTML = localStorage.getItem(i);
    const messageTime = document.createElement('span');
    messageTime.setAttribute('slot', 'time');
    messageTime.textContent = message.time;
    mess2.appendChild(messageTime);

    const messageText = document.createElement('span');
    messageText.setAttribute('slot', 'message');
    messageText.textContent = message.text;
    mess2.appendChild(messageText);

    this.$form.insertAdjacentElement('beforebegin', mess2);

    this._mess_id = i;
    i += 1;
  }
}

  _getIdMess() {
    if ( this._mess_id) {
      this._mess_id += 1;
    } else {
      this._mess_id=1;
    }
    return this._mess_id;
  }

  _onSubmit (event) {
    event.preventDefault();
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    const message = {text: this.$input.value,
                    time: formatedTime,
                    isRead: true};

    // const mess = document.createElement('div');
    // mess.classList.add('mess-element');
    // mess.innerHTML = this.$input.value;
    // this.$form.insertAdjacentElement('beforebegin', mess);

    const mess2 = document.createElement('message-mess');
    // mess2.classList.add('mess-element');
    // mess2.innerHTML = this.$input.value;
    
    const messageText = document.createElement('span');
    messageText.setAttribute('slot', 'message');
    messageText.textContent = this.$input.value;
    mess2.appendChild(messageText);

    const messageTime = document.createElement('span');
    messageTime.setAttribute('slot', 'time');
    messageTime.textContent = message.time;
    mess2.appendChild(messageTime);

    this.$form.insertAdjacentElement('beforebegin', mess2);

    const idM =String(this._getIdMess());
    console.log(idM, message, '2');
    localStorage.setItem(idM, JSON.stringify(message));

    this.$input.scrollIntoView(false);
    }

  _onKeyPress (event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageField);
