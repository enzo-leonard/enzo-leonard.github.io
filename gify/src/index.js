const GIPHY_API_KEY = "1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm";
const query = document.querySelector('input');

const gifList = document.querySelector('.gif-list');
let gifs = document.querySelectorAll('.gif-list img')
const selectedGif = document.querySelector('.selected-gif')

query.addEventListener('keydown', () => {
  const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query.value}&limit=20`;
  fetch(giphEndpoint)
  .then((response) => response.json())
  .then((data) => {
      gifList.innerHTML = null;

    data.data.forEach((gif) => {
      const img = document.createElement("img")
     img.setAttribute("class", "gif") 
      img.setAttribute("src", `https://media2.giphy.com/media/${gif.id}/200.gif`);

      gifList.appendChild(img)
      
      img.addEventListener("click", (e) => {
        selectedGif.innerHTML = `<img src="https://media2.giphy.com/media/${gif.id}/200.gif" />`
        
      })
    })
  });
})




