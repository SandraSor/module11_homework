const input_message=document.querySelector('.input_message');
const message_area=document.querySelector('.message_area');
const btn_send=document.querySelector('.btn_send');
const btn_geo=document.querySelector('.btn_geo');

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

  
