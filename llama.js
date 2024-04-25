const container = document.getElementById('llama-container');

function createLlama() {
  const img = document.createElement('img');
  img.src = 'img/icon.png';
  img.classList.add('llama');

  const exclusionZone = window.innerWidth * 0.275;
  const side = Math.round(Math.random());
  const xPos = side === 0
    ? Math.random() * (window.innerWidth / 2 - exclusionZone)
    : (window.innerWidth / 2 + exclusionZone) + Math.random() * (window.innerWidth / 2 - exclusionZone);
  
  img.style.left = `${xPos}px`;
  img.style.top = '75px';
  img.style.width = '50px';
  img.style.height = '50px';

  const rotationDirection = Math.random() < 0.5 ? 'fallturn-clockwise' : 'fallturn-counterclockwise';
  img.style.animation = `fall 7s linear forwards, ${rotationDirection} 7s linear infinite`;

  container.appendChild(img);
  
  setTimeout(() => {
    img.remove();
  }, 7000);
}

setInterval(createLlama, 2500);
