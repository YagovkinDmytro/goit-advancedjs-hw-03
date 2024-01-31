export const fetchBreeds = function () {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const fetchCatByBreed = function (breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
