import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user } = useAuth()

   console.log("navbar men user jo auth se a rha hai",user)

  return (
   <nav className=" select-none w-full bg-black text-white px-4 sm:px-6 md:px-8 py-4">

  <div className="flex items-center justify-between">

    {/* LEFT */}
    <h1 className="text-base sm:text-lg md:text-2xl font-bold text-blue-500 whitespace-nowrap">
      MyTube
    </h1>

    {/* MIDDLE LINKS */}
    <ul className="flex items-center gap-3 sm:gap-5 md:gap-6 text-lg sm:text-sm md:text-base whitespace-nowrap">

      {/* ONLY WHEN USER NOT LOGGED IN */}
            {
              !user && (
                <>
                  <li>
                    <Link to="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )
            }


      

    </ul>

    {/* RIGHT */}
    <div className="flex items-center">

      {
            user && (

              <Link to="/profile">

                <img
                  src={user?.avatar?.replace("http://", "https://")}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />

              </Link>

            )
          }


    </div>

  </div>

</nav>
  )
}

export default Navbar