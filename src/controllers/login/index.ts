import { Login } from "@models/entity/Login"
import { getRepository } from "typeorm"

export const getLogin = async (request, response) => {
  const loginRepository = getRepository(Login)
  const login = await loginRepository.find()
  return response.json(login)
}
