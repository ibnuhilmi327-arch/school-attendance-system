import jwt from "jsonwebtoken"

export function generateToken(user:any) {
  return jwt.sign(
    user,
    "SECRET_KEY",
    {
      expiresIn:"1d"
    }
  )
}
