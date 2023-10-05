import {fetchFilms} from '@/async/film'
import Film from '@/components/Film/Film'

const FilmPage = async () => {
  const films = await fetchFilms()

  return (
    <>
      <Film films={films} />
    </>
  )
}

export default FilmPage