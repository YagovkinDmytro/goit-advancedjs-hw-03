import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// axios.defaults.headers.common['x-api-key'] = 'live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7';

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
        iziToast.error({
          title: 'Error:',
          message: `${elements.messageError.textContent}`,
          position: 'topRight',
        }),
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
  elements.catInfo.style.display = 'none';
  const selectedOptionValue = event.currentTarget.value;
  fetchCatByBreed(selectedOptionValue)
    .then(data => {
      elements.messageLoader.style.display = 'block';
      setTimeout(() => {
        renderInfo(data);
        elements.messageLoader.style.display = 'none';
      }, 500);
    })
    .catch(
      err => (
        iziToast.error({
          title: 'Error:',
          message: `${elements.messageError.textContent}`,
          position: 'topRight',
        }),
        (elements.messageLoader.style.display = 'none')
      )
    );
}

function renderInfo(arr) {
  elements.catInfo.style.display = 'flex';

  const card = arr
    .map(({ url, breeds }) => {
      return breeds.map(
        ({ name, description, temperament }) =>
          `<img src="${url}" alt="${name}" width="600"/>
      <div class ="cat-info-text"><h2>${name}</h2>
      <p>${description}</p>
      <p><span>Temperament:</span> ${temperament}</p></div>`
      );
    })
    .join('');
  elements.catInfo.innerHTML = card;
}
