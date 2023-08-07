const input_message=document.querySelector('.input_message');
const message_area=document.querySelector('.message_area');
const btn_send=document.querySelector('.btn_send');
const btn_geo=document.querySelector('.btn_geo');

let socket = new WebSocket("wss://echo.websocket.events");

socket.onopen = function(event) {
  console.log("CONNECTED");
};

socket.onmessage = function(event) {
  console.log(event.data);
  addMessage(event.data, 'flex-start');
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    alert('[close] Соединение прервано');
  }
};

socket.onerror = function(error) {
  console.log(error.data)
};

btn_send.addEventListener('click', () => {
        let message = input_message.value;
        socket.send(message);
        addMessage(message);
        input_message.value = ''
    })

function addMessage(message, position='flex-end') {
  let element = `
    <p class='message-window' style='align-self: ${position}'>
      ${message}
    </p>`;
        
  let chat = message_area.innerHTML;
  message_area.innerHTML = chat + element;
}

const error = () => {
      let error = "Позиция не может быть определена" 
      addMessage(error);
  }
    
const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
    
  let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  addLink(link)
}
    
function addLink(link) {
  let element = `
    <a  href='${link}'
      target='_blank'
      style='text-decoration: none;'
    >
      Гео-позиция
    </a>`;
      let chat = message_area.innerHTML;
      message_area.innerHTML = chat + element;
    };

btn_geo.addEventListener('click', ()=>{
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const { coords } = position;
  //   console.log(coords.latitude, coords.longitude);
  // });
} else{
  console.log("You can't use geolocation");
}
})

  
