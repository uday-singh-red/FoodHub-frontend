import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase/firebase"

export const useGoogleLogin = ( setUser, navigate) => {

  const googleLogin = async () => {

    try {
      // GOOGLE POPUP
      const result = await signInWithPopup(
        auth,
        provider
      )

      // GOOGLE USER
      const googleUser = {
        fullname: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL
      }

      // BACKEND API
      const res = await fetch(
        "http://localhost:5000/api/v1/users/google-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(googleUser)
        }
      )

      const data = await res.json()

      console.log("google login", data)

      if (data.success) {
        setUser(data.data)
        navigate("/")
      }
    } catch (error) {
      console.log(error)

    }
  }

  return googleLogin
}