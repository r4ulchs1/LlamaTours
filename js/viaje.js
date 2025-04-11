const counterValueElement = document.getElementById('valor');
const incrementButton = document.getElementById('suma');
const decrementButton = document.getElementById('resta');
const viajerosDisplay = document.getElementById('viajerosDisplay');
const viajerosModal = document.getElementById('viajerosModal');
const totalPriceElement = localStorage.getItem("precioViaje")
const importeTotalElement = document.querySelector('.importeTotal p');
const importeModal = document.getElementById('importeModal');



const numforms= counterValueElement;


let counter = 1;
function updateCounter() {
    counterValueElement.value = counter;
    viajerosDisplay.innerText = counter;
    viajerosModal.innerText = `N° de Viajeros: ${counter}`
    const totalAmount = counter * totalPriceElement;

    importeTotalElement.innerText = `S/ ${totalAmount}`;
    importeModal.innerText = `S/ ${totalAmount}`
}

counterValueElement.addEventListener('input', () => {
    counter = parseInt(counterValueElement.value);
    updateCounter();
});

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (counter > 1) {
        counter--;
        updateCounter();
    }
});

updateCounter();


function changeImage(element) {
    const featuredImage = document.getElementById('featured');
    
    featuredImage.src = element.src;
    
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(img => img.classList.remove('active'));
    element.classList.add('active'); 
}

////////////////////////////////////////////////////////////////////////



const datosViajerosContainer = document.querySelector('.datosViajeros');

function createForms(numberOfForms) {
  datosViajerosContainer.innerHTML = '';

  for (let i = 0; i < numberOfForms; i++) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('datosViajeros');

    formContainer.innerHTML = `
      <form id="formModal-${i + 1}" action="#" method="post">
        <div class="formDatosViajeros">
          <label for="nombre-${i + 1}">Nombres:</label><br>
          <input type="text" id="nombre-${i + 1}" name="nombre-${i + 1}" required>
        </div>
        <div class="formDatosViajeros">
          <label for="apellido-${i + 1}">Apellidos:</label> <br>
          <input type="text" id="apellido-${i + 1}" name="apellido-${i + 1}" required>
        </div>
        <div class="formDatosViajeros">
          <label for="correo-${i + 1}">Correo Electrónico:</label> <br>
          <input type="email" id="correo-${i + 1}" name="correo-${i + 1}" required>
        </div>
        <div class="formDatosViajeros">
          <label for="wsp-${i + 1}">Número de WhatsApp:</label> <br>
          <input type="tel" id="wsp-${i + 1}" name="wsp-${i + 1}" required>
        </div>
        <div class="formDatosViajeros">
          <label for="fecha-nacimiento-${i + 1}">Fecha de Nacimiento:</label> <br>
          <input type="date" id="fecha-nacimiento-${i + 1}" name="fecha-nacimiento-${i + 1}" required>
        </div>
      </form>
    `;

    datosViajerosContainer.appendChild(formContainer);
  }
}

function scrollDestinosLeft() {
  const destinosHorizontal = document.querySelector('.destinosHorizontal');
  destinosHorizontal.scrollBy({
      left: -250,
      behavior: 'smooth'
  });
}

function scrollDestinosRight() {
  const destinosHorizontal = document.querySelector('.destinosHorizontal');
  destinosHorizontal.scrollBy({
      left: 250,
      behavior: 'smooth'
  });
}
