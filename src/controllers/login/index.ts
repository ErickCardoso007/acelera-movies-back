export const postLogin = async (request, response) => {
  const data = request.body
  if (data.senha === "123" && data.email === "erick@gmail.com") {
    return response.json({ message: "Autenticado com sucesso!", auth: true })
  }
  return response.json({
    message: "Não foi autenticado com sucesso!",
    auth: false,
  })
}
