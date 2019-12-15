import AvatarIcon from '../../img/avatar.jpeg';

const template = document.createElement('template');
template.innerHTML = `
  <style>
  .container {
      box-sizing: border-box;
      background-color: #fffafa;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }

    .center-block {
      font-size: 25px;
      display: flex;
    }

    .last {
      font-size: 12px;
    }

    .avatar {
      border-radius: 50%;
      height: 35px;
      margin-right: 5px;
    }

    .hat {
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background: #f19cbb;
      height: 45px;
      position: fixed;
      z-index: 1000;
  }

  .menu-button, .back-button {
    margin-top: 10px;
    position: relative;
    margin: 0px 10px;
  }

  .new-mess-button {
    position: fixed;
    bottom: 15px;
    right: 15px;
  }

  .new-mess-button:hover {
    box-shadow: inset #aaa 0 0 40px 10px,
	                  #aaa 0 0 24px 12px;
  }

  .hat-button {
    cursor: pointer;
    margin-top: 5px;
  }

  .hat-button:active {
    box-shadow: inset #f18caa 0 0 40px 10px,
    #f18caa 0 0 24px 12px;
  }

  .new-mess-button {
    border-radius: 50%;
    background: #cca92c;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(204,169,44, 0.9);
    animation: pulse 2s infinite;
  }

  .new-mess-button:hover {
    animation: none;
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
        box-shadow: 0 0 0 20px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }

  </style>

  <div class="container" id="main">
    <div></div>
    <div class="hat">
      <div class="left-block">
        <svg class="menu-button hat-button" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="25px" height="25px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
            <path d="M604.267,194.727c4.257,0,7.733-3.644,7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733
              c-4.256,0-7.733,3.644-7.733,7.733v40.169c0,4.256,3.283,7.733,7.733,7.733H604.267z"/>
            <path d="M0,326.084c0,4.256,3.283,7.733,7.733,7.733h596.533c4.256,0,7.733-3.645,7.733-7.733v-40.169
              c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256,0-7.733,3.645-7.733,7.733V326.084z"/>
            <path d="M0,465.175c0,4.256,3.283,7.733,7.733,7.733h596.533c4.256,0,7.733-3.645,7.733-7.733v-40.169
          c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256,0-7.733,3.644-7.733,7.732V465.175z"/>
        </svg>
        <svg class="back-button hat-button" style="display: none" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        width="25px" height="25px" viewBox="0 0 400.004 400.004" style="enable-background:new 0 0 400.004 400.004;"
	        xml:space="preserve"><g><path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
	        c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
		      c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
          C400.004,190.438,392.251,182.686,382.688,182.686z"/>
          </svg>
      </div>
      <div class="center-block">
        Messenger
      </div>
      <div class="right-block">
        <svg class="search-button hat-button" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" height="30"><path fill="#263238" fill-opacity=".3" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
        <svg style="display: none" class="options-button hat-button" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" height="30"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
      </div>
    </div>

    <chat-list></chat-list>

    <svg class="new-mess-button" width="55" height="55" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{fill:#4D4D4D;}.st1{fill:#FFFFFF;}</style><circle class="st0" cx="64" cy="64" r="64"/><g><path class="st1" d="M87.4,50.5l9.9-9.9c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0l-9.9,9.9L87.4,50.5z"/><path class="st1" d="M74.6,43.5L38,80.1l-4.4,13c-0.3,0.8,0.5,1.5,1.3,1.3l13-4.4l36.6-36.6L74.6,43.5z"/></g></svg>

  </div>
`;

class ManiElement extends HTMLElement {
  constructor() {
    super();

    localStorage.clear();
    localStorage.setItem(
      'messengerState',
      JSON.stringify({
        chats: [
          {
            id: 123,
            interlocutor: 'Bender',
            messages: [
              {
                direction: 'fromMe',
                text: 'ololo',
                date: '2019-10-22T21:50:03.113Z',
                isRead: true,
              },
              {
                direction: 'fromMe',
                text: 'asdf',
                date: '2019-10-22T22:12:43.113Z',
                isRead: true,
              },
            ],
          },
          {
            id: 345,
            interlocutor: 'Homer',
            messages: [
              {
                direction: 'fromMe',
                text: 'urt',
                date: '2019-10-23T21:50:03.113Z',
                isRead: true,
              },
              {
                direction: 'fromMe',
                text: 'Ita',
                date: '2019-10-25T22:12:43.113Z',
                isRead: true,
              },
            ],
          },
        ],
        profile: {
          name: 'Arsenii',
          constats: [],
        },
      }),
    );

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$main = this._shadowRoot.querySelector('#main');
    this.$leftButton = this._shadowRoot.querySelector('#left-button');
    this.$rightBlock = this._shadowRoot.querySelector('div.right-block');
    this.$centerBlock = this._shadowRoot.querySelector('div.center-block');
    this.$menuButton = this._shadowRoot.querySelector('.menu-button');
    this.$backButton = this._shadowRoot.querySelector('.back-button');
    this.$searchButton = this._shadowRoot.querySelector('.search-button');
    this.$optionsButton = this._shadowRoot.querySelector('.options-button');
    this.$chatList = this._shadowRoot.querySelector('chat-list');
    this.$newMessButton = this._shadowRoot.querySelector('.new-mess-button');

    this._shadowRoot.children[1].onclick = this.click.bind(this);
  }

  click(e) {
    e.composedPath().forEach((element) => {});
    const chatElem = e.composedPath().find((element) => {
      if (element.tagName === 'CHAT-ELEMENT') {
        return true;
      }
      return undefined;
    });

    if (chatElem) {
      this.$main.style['justify-content'] = 'space-between';
      this.$chatList.style.display = 'none';

      this.$menuButton.style.display = 'none';

      this.$backButton.style.display = '';

      const messngerState = JSON.parse(localStorage.getItem('messengerState'));

      const currentChat = messngerState.chats.find((element) => {
        if (String(element.id) === chatElem.id.slice(4)) {
          return true;
        }
        return undefined;
      });

      const messageContainer = document.createElement('message-container');
      messageContainer.setAttribute('abc', chatElem.id.slice(4));

      this.$messageContainer = messageContainer;

      const messageText = document.createElement('span');
      messageText.setAttribute('slot', 'chat-id');
      messageText.setAttribute('c-i', chatElem.id.slice(4));
      messageText.setAttribute('id', 'chat-id');

      messageText.value = chatElem.id.slice(4);
      messageContainer.appendChild(messageText);

      this.$main.appendChild(messageContainer);

      this.$centerBlock.textContent = '';
      const image = document.createElement('img');
      image.setAttribute('src', AvatarIcon);
      image.classList.add('avatar');
      this.$centerBlock.appendChild(image);

      const nameAndLast = document.createElement('div');
      const name = document.createElement('div');
      name.textContent = currentChat.interlocutor;
      const last = document.createElement('div');
      last.textContent = 'был 5 часов назад';
      last.classList.add('last');
      nameAndLast.appendChild(name);
      nameAndLast.appendChild(last);
      this.$centerBlock.appendChild(nameAndLast);

      this.$optionsButton.style.display = '';

      this.$newMessButton.style.display = 'none';
    }

    const backButton = e.composedPath().find((element) => {
      if (element.tagName === 'svg') {
        return true;
      }
      return undefined;
    });
    if (backButton && backButton.classList.contains('back-button')) {
      this.$main.style['justify-content'] = 'flex-start';
      this.$messageContainer.style.display = 'none';
      this.$chatList.style.display = '';
      this.$backButton.style.display = 'none';
      this.$menuButton.style.display = '';
      this.$centerBlock.textContent = 'Messenger';
      this.$optionsButton.style.display = 'none';
      this.$newMessButton.style.display = '';
    }
  }
}

customElements.define('main-element', ManiElement);
