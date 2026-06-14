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
  const [success, setSuccess] = useState("")


  const navigate = useNavigate()



  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email)

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
      setSuccess(data.message)

        setTimeout(()=>{
          setSuccess('');
        },2000);

            navigate("/")
      } else {
        setError(data.message)

        setTimeout(()=>{
          setError('');
        },2000);
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

  <div
    className="
    min-h-screen
    bg-[#FFF5F5]
    flex
    items-center
    justify-center
    p-4
    "
  >

    <div
      className="
      w-full
      max-w-md
      bg-white
      rounded-3xl
      shadow-xl
      p-8
      "
    >

      {/* HEADING */}

      <div className="text-center mb-8">

        <h1
          className="
          text-4xl
          font-bold
          text-[#FF3B4E]
          "
        >
          FoodHub
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Login to continue
        </p>

      </div>

      {/* ERROR */}

      {
        Error && (
          <div className="
            bg-red-100
            border
            border-red-300
            text-red-600
            rounded-xl
            p-3
            mb-4
            text-center
          ">
            {Error}
          </div>
        )
      }
      {
        success && (
          <div className="
            bg-red-100
            border
            border-red-300
            text-red-600
            rounded-xl
            p-3
            mb-4
            text-center
          ">
            {success}
          </div>
        )
      }

      <form
        onSubmit={handleLogin}
        className="
        flex
        flex-col
        gap-4
        "
      >

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>{
             console.log(email);
            setEmail(e.target.value)
           
          }
          }
          className="
          w-full
          p-3
          border
          border-gray-300
          rounded-xl
          outline-none
          focus:border-[#FF3B4E]
          "
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="
          w-full
          p-3
          border
          border-gray-300
          rounded-xl
          outline-none
          focus:border-[#FF3B4E]
          "
        />

        {/* LOGIN BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="
          bg-[#FF3B4E]
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:opacity-90
          transition
          "
        >
          {
            loading
            ? "Logging In..."
            : "Login"
          }
        </button>

        {/* GOOGLE */}

        <button
          type="button"
          onClick={googleLogin}
          className="
          border-2
          border-[#FF3B4E]
          text-[#FF3B4E]
          py-3
          rounded-xl
          font-semibold
          hover:bg-[#FF3B4E]
          hover:text-white
          transition
          "
        >
          Continue With Google
        </button>

      </form>

      {/* REGISTER */}

      <p
        className="
        text-center
        text-gray-600
        mt-6
        "
      >
        Don't have an account?

        <span
          onClick={() => navigate("/register")}
          className="
          text-[#FF3B4E]
          font-semibold
          cursor-pointer
          ml-1
          "
        >
          Register
        </span>

      </p>

    </div>

  </div>

)
}