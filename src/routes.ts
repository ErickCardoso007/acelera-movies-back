import { getLogin } from "@controllers/login"
import { getID, getMovie, itsWorks } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getID)
}
