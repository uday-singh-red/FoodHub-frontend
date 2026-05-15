// src/context/AuthContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)



  // CURRENT USER FETCH
  const getCurrentUser = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/v1/users/currentUser",
        {
          method: "GET",
          credentials: "include"
        }
      )
      console.log ("response", res)

      const data = await res.json()

      console.log("data" ,data)

      if (data.success) {
        setUser(data.data)
      } else {
        setUser(null)
      }

    } catch (error) {

      console.log(error)
      setUser(null)

    } finally {

      setLoading(false)

    }
  }



  // APP START HONE PAR
  useEffect(() => {
    getCurrentUser()
  }, [])



  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        getCurrentUser
      }}
    >

      {children}

    </AuthContext.Provider>

  )
}



// CUSTOM HOOK
export const useAuth = () => {
  return useContext(AuthContext)
}