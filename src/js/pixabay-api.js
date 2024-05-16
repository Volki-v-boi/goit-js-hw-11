const apiKey = '43772566-941124190665b8a45a176dbcd';
const BASE_URL = 'https://pixabay.com/api/';
export const searchImages = query => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        return [];
      } else {
        return data.hits;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      return 'An error occurred while fetching images.';
    });
};

//https://pixabay.com/api/?key=43772566-941124190665b8a45a176dbcd&q=yellow+flowers&image_type=photo
