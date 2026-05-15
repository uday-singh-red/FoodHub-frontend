import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useLogout } from '../costomHook/userLogout'

export default function Profile() {

   const logout=useLogout();

  const { user, loading } = useAuth()
  
  const navigate = useNavigate()


  if (loading) {
    return (
      <div className="text-white flex justify-center items-center h-screen">
        Loading...
      </div>
    )
  }

  


  return (

    <div className="w-full min-h-screen bg-black text-white p-6">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-zinc-500 px-4 py-2 rounded-lg hover:bg-zinc-700"
      >
        ← Back
      </button>



      {/* PROFILE CARD */}
      <div className="max-w-md mx-auto bg-zinc-600 p-6 rounded-xl text-center">

        {/* AVATAR */}
        <img
          src={user?.avatar}
          alt="avatar"
          className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-blue-500"
        />



        {/* NAME */}
        <h1 className="text-2xl font-bold mt-4">
          {user?.fullname}
        </h1>



        {/* USERNAME */}
        <p className="text-gray-400">
          @{user?.username}
        </p>



        {/* EMAIL */}
        <p className="text-sm text-gray-500 mt-2">
          {user?.email}
        </p>



        {/* EXTRA INFO */}
        <div className="mt-6 text-sm text-gray-300">

          <p>Account Status: Active</p>

        </div>

        <button onClick={logout} className="bg-amber-800 p-2 m-1.5 rounded-2xl">
       Logout
        </button>

      </div>

      

    </div>

  )
}