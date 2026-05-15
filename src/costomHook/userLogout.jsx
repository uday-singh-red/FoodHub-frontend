import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const useLogout = () => {

    const {setUser}=useAuth()

  const navigate = useNavigate()

  const logout = async () => {

    try {

      await fetch(
        "http://localhost:5000/api/v1/users/logout",
        {
          method: "POST",
          credentials: "include"
        }
      )
      setUser(null)

      navigate("/login")

    } catch (error) {

      console.log(error)

    }
  }

  return logout
}