import { getLogin } from "@controllers/login"
import {
  deleteMovie,
  getID,
  getMovie,
  itsWorks,
  postMovie,
  putMovie,
} from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getID)
  app.post("/movie", postMovie)
  app.delete("/movie/:id", deleteMovie)
  app.put("/movie/:id", putMovie)
}
