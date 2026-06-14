import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useGoogleLogin } from "../costomHook/useGoogleLogin"

export default function Register() {

    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    
    const navigate=useNavigate();
    const {setUser}=useAuth();


    const registerUser = async () => {

        try {
            const formData = new FormData()

            formData.append("fullname", fullname)
            formData.append("username", username)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("avatar", avatar)
            formData.append("coverImage", coverImage)

            console.log("FORM DATA",formData)

            const response = await fetch(
                "http://localhost:5000/api/v1/users/register",
                {
                    method: "POST",
                    credentials: "include",
                    body: formData
                }
            )

            const data = await response.json()
            console.log(data)
            navigate("/verify-otp", {state:{ email }})

        } catch (error) {
            console.log(error)
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
          Create your account
        </p>

      </div>

      {/* FULLNAME */}

      <input
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={(e)=>setFullname(e.target.value)}
        className="
        w-full
        p-3
        mb-4
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:border-[#FF3B4E]
        "
      />

      {/* USERNAME */}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className="
        w-full
        p-3
        mb-4
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:border-[#FF3B4E]
        "
      />

      {/* EMAIL */}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="
        w-full
        p-3
        mb-4
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
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="
        w-full
        p-3
        mb-4
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:border-[#FF3B4E]
        "
      />

      {/* AVATAR */}

      <div className="mb-4">

        <label
          className="
          block
          text-sm
          font-semibold
          text-gray-700
          mb-2
          "
        >
          Profile Image
        </label>

        <input
          type="file"
          onChange={(e)=>
            setAvatar(
              e.target.files[0]
            )
          }
          className="
          w-full
          border
          border-gray-300
          rounded-xl
          p-2
          "
        />

      </div>

      {/* COVER IMAGE */}
{/* 
      <div className="mb-6">

        <label
          className="
          block
          text-sm
          font-semibold
          text-gray-700
          mb-2
          "
        >
          Cover Image
        </label>

        <input
          type="file"
          onChange={(e)=>
            setCoverImage(
              e.target.files[0]
            )
          }
          className="
          w-full
          border
          border-gray-300
          rounded-xl
          p-2
          "
        />

      </div> */}

      {/* REGISTER */}

      <button
        onClick={registerUser}
        className="
        w-full
        bg-[#FF3B4E]
        text-white
        py-3
        rounded-xl
        font-semibold
        hover:opacity-90
        transition
        "
      >
        Register
      </button>

      {/* GOOGLE */}

      <button
        type="button"
        onClick={googleLogin}
        className="
        w-full
        mt-4
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

      {/* LOGIN */}

      <p
        className="
        text-center
        text-gray-600
        mt-6
        "
      >
        Already have an account?

        <span
          onClick={() =>
            navigate("/login")
          }
          className="
          text-[#FF3B4E]
          font-semibold
          cursor-pointer
          ml-1
          "
        >
          Login
        </span>

      </p>

    </div>

  </div>

)
}