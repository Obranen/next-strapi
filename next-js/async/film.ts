export const fetchFilms = async () => {
  const response = await fetch(`${process.env.FETCH_STRAPI_URL}/api/films?populate=*`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}