'use client'

import {FC} from 'react'

interface IFilmProps {
  films: any[]
}

const Film: FC<IFilmProps> = ({films}) => {
  console.log(films.data[0].attributes)
  return (
    <>
      {films.data.map((film: any) =>
        <div key={film.id}>
          {film.attributes.title}
        </div>
      )}
    </>
  )
}

export default Film