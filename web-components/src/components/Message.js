const template = document.createElement('template');
template.innerHTML = `
  <style>

  .mess-text {
    align-self: flex-end;
    margin-right: 20px;
    word-break: break-all;
  }

  .bottom-block {
    padding-top: 5px;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
  }

  .mess-time {
    margin-right: 5px;
    font-size: 12px;
  }
  </style>

  <div class="mess-text">
      <slot name="message"></slot>
  </div>
  <div class="bottom-block">
    <div class="mess-time">
      <slot name="time"></slot>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="#2fc22f" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
  </div>
`;

class Message extends HTMLElement {
  constructor () {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$text = this._shadowRoot.querySelector('.mess-text');
    this.$time = this._shadowRoot.querySelector('.mess-time');
    // this.$text.textContent = "";
    // const date = new Date();
    // this.$time.textContent = `${date.getHours()}:${date.getMinutes()}`;
  }
}
customElements.define('message-mess', Message);
