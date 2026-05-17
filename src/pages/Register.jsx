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

        <div className="w-full h-screen p-8 flex items-center justify-center text-stone-200">

            <div className="w-[400px] bg-zinc-900 p-8 rounded-xl">

                <h1 className="text-4xl font-bold mb-8 text-center">
                    Register
                </h1>



                <input
                    type="text"
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
                />


                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
                />


                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
                />


                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
                />


                {/* AVATAR */}
                <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="w-full mb-4"
                />


                {/* COVER IMAGE */}
                <input
                    type="file"
                    onChange={(e) => {
                        console.log(e.target.files[0])
                        setCoverImage(e.target.files[0])
                    }}
                    className="w-full mb-6"
                />


                <button
                    onClick={registerUser}
                    className="w-full bg-red-500 p-3 rounded-lg"
                >
                    Register
                </button>

                
        <button
        type="button"
        onClick={googleLogin}
        className="w-full bg-red-500 hover:bg-red-600 py-2 my-4 rounded-lg font-semibold"
      >
        Continue with Google
      </button>

            </div>

        </div>
    )
}