
import { API_KEY, API_URL } from './settings'

export default function getGifs ({ limit = 27, keyword = 'cat', page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      }
      )
      return gifs
    })
}
