import { getLogin } from "@controllers/login"
import { getID, getMovie, itsWorks, postMovie } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getID)
  app.post("/movie", postMovie)
}
