import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

// axios.defaults.headers.common['x-api-key'] =
//   'live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7';

const elements = {
  select: document.querySelector('.breed-select'),
  messageLoader: document.querySelector('.loader'),
  messageError: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

elements.select.addEventListener('change', setBreed);

elements.select.style.display = 'none';
elements.messageError.style.display = 'none';
elements.catInfo.style.display = 'none';

function loading() {
  fetchBreeds()
    .then(data => {
      elements.messageLoader.style.display = 'block';
      makeOption(data);
      elements.messageLoader.style.display = 'none';
      elements.select.style.display = 'block';
    })
    .catch(
      err => (
        (elements.messageError.style.display = 'block'),
        (elements.messageLoader.style.display = 'none')
      )
    );
}
loading();

function setDefault() {
  return elements.select.insertAdjacentHTML(
    'beforeend',
    '<option value="">Choose a breed</option>'
  );
}
setDefault();

function makeOption(data) {
  const option = data
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  elements.select.insertAdjacentHTML('beforeend', option);
}

function setBreed(event) {
  const selectedOptionValue = event.currentTarget.value;
  fetchCatByBreed(selectedOptionValue)
    .then(data => {
      elements.messageLoader.style.display = 'block';
      renderInfo(data);
    })
    .catch(
      err => (
        (elements.messageError.style.display = 'block'),
        (elements.messageLoader.style.display = 'none')
      )
    );
}

function renderInfo(arr) {
  elements.messageLoader.style.display = 'none';
  elements.catInfo.style.display = 'block';

  const card = arr
    .map(({ url, breeds }) => {
      return breeds.map(
        ({ name, description, temperament }) =>
          `<img src="${url}" alt="${name}" />
      <h2>${name}</h2>
      <p>${description}</p>
      <p>Temperament: ${temperament}</p>`
      );
    })
    .join('');
  elements.catInfo.innerHTML = card;
}
