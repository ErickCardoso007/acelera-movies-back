import { Movie } from "@models/entity/Movie"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const filme = await movieRepository.find()
  return response.json(filme)
}
