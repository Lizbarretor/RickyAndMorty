// Elementos del DOM
const gridContainer = document.getElementById('grid-container');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-btn');

// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => renderCharacters(data.results))
    .catch(error => console.error(error));
});

// Función para renderizar los personajes en el grid
function renderCharacters(characters) {
  gridContainer.innerHTML = ''; // Limpiar el grid

  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <button onclick="openModal('${character.name}', '${character.image}', '${character.location.name}')">Ver más</button>
    `;
    gridContainer.appendChild(card);
  });
}

// Función para abrir el modal
function openModal(name, imgSrc, location) {
  document.getElementById('modal-title').innerText = name;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').innerText = `Localización: ${location}`;
  modal.style.display = 'block';
}

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
