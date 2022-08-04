import { Movie } from "@models/entity/Movie"
import { response } from "express"
import { request } from "http"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const filme = await movieRepository.find()
  return response.json(filme)
}

export const getID = async (request, response) => {
  const idRepository = getRepository(Movie)
  const idMovie = await idRepository.findOne(request.params.id)
  return response.json(idMovie)
}

export const postMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const movie = await movieRepository.save(request.body)
  return response.json(movie)
}
