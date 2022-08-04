import { Movie } from "@models/entity/Movie"
import { response } from "express"
import { request } from "http"
import { getRepository, Repository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const movie = await movieRepository.find()
  return response.json(movie)
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

export const deleteMovie = async (request, response) => {
  const idRepository = getRepository(Movie)
  const idMovie = await idRepository.delete(request.params.id)
  return response.json(idMovie)
}

export const putMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const movieEdit = await movieRepository.update(
    request.params.id,
    request.body
  )
  return response.json(movieEdit)
}
