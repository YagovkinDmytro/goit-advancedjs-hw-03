const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_COLECTION = '/breeds';
const END_POINT_IMG = '/images/search';
const API_KEY =
  'live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7';

const params = new URLSearchParams({
  api_key: API_KEY,
  breed_ids: '',
});

// 'https://api.thecatapi.com/v1/breeds?api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7'
// `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7`

export const fetchBreeds = function () {
  return fetch(`${BASE_URL}${END_POINT_COLECTION}?${params.api_key}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
};

export const fetchCatByBreed = function (breedId) {
  return fetch(`${BASE_URL}${END_POINT_IMG}?${params}${breedId}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
};
