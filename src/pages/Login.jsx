import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useGoogleLogin } from "../costomHook/useGoogleLogin"



export default function Login() {
  const { setUser } = useAuth()

  

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [Error, setError] = useState("")


  const navigate = useNavigate()



  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await fetch(
        "http://localhost:5000/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      const data = await res.json()

      console.log("login ka data", data)

      if (data.success) {
        setError("")
          setUser(data.data.user)
          console.log("user login ho gaya")
            navigate("/")
      } else {
        setError(data.message)
      }

    } catch (error) {
      console.log(error)
      setError(data.message)
    } finally {
      setLoading(false)
    }
  }

  const googleLogin =useGoogleLogin(setUser, navigate)


  return (

    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white">

      {
   Error &&
   <h3
   className=" text-red-500 text-md text-center w-full mb-4" >
      {Error}
   </h3>
}

      <form
        onSubmit={handleLogin}
        className="w-[350px] bg-zinc-900 p-6 rounded-xl"
      >

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
        />



        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
        />



        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

    
        <button
        type="button"
        onClick={googleLogin}
        className="w-full bg-red-500 hover:bg-red-600 py-2 my-4 rounded-lg font-semibold"
      >
        Continue with Google
      </button>


        {/* REGISTER LINK */}
        <p className="text-sm text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer"
          >
            Register
          </span>
        </p>

      </form>

    </div>

  )
}