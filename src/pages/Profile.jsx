import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLogout } from "../costomHook/userLogout";
import { FaUserShield } from "react-icons/fa";

export default function Profile() {
  const logout = useLogout();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5F5]">
        <h1 className="text-2xl font-bold text-[#FF3B4E]">
          Loading...
        </h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5F5]">
        <h1 className="text-2xl font-bold text-red-500">
          User Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF5F5] p-4 md:p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
        bg-white
        text-[#FF3B4E]
        border
        border-[#FF3B4E]
        px-4
        py-2
        rounded-xl
        font-semibold
        hover:bg-[#FF3B4E]
        hover:text-white
        transition
        "
      >
        ← Back
      </button>

      {/* Main Card */}
      <div
        className="
        max-w-4xl
        mx-auto
        mt-8
        bg-white
        rounded-3xl
        shadow-xl
        overflow-hidden
        "
      >

        {/* Header */}
        <div
          className="
          bg-[#FF3B4E]
          h-36
          flex
          items-center
          justify-center
          "
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My Profile
          </h1>
        </div>

        {/* Profile Info */}
        <div className="px-6 md:px-10 pb-10">

          {/* Avatar */}
          <div className="flex justify-center -mt-16">
            <img
              src={user?.avatar?.replace("http://", "https://")}
              alt="avatar"
              className="
              w-32
              h-32
              rounded-full
              object-cover
              border-4
              border-white
              shadow-lg
              "
            />
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {user.fullname}
            </h2>

            <p className="text-gray-500 mt-1">
              @{user.username}
            </p>
          </div>

          {/* Details */}
          <div
            className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            "
          >

            <div className="bg-[#FFF5F5] p-5 rounded-2xl">
              <h3 className="font-bold text-[#FF3B4E] mb-2">
                Email
              </h3>

              <p className="text-gray-700 break-all">
                {user.email}
              </p>
            </div>

            <div className="bg-[#FFF5F5] p-5 rounded-2xl">
              <h3 className="font-bold text-[#FF3B4E] mb-2">
                Account Status
              </h3>

              <p className="text-green-600 font-semibold">
                Active
              </p>
            </div>

            <div className="bg-[#FFF5F5] p-5 rounded-2xl">
              <h3 className="font-bold text-[#FF3B4E] mb-2">
                Role
              </h3>

              <p className="text-gray-700 capitalize">
                {user.role}
              </p>
            </div>

            <div className="bg-[#FFF5F5] p-5 rounded-2xl">
              <h3 className="font-bold text-[#FF3B4E] mb-2">
                Welcome
              </h3>

              <p className="text-gray-700">
                Enjoy your delicious meals 🍔
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            "
          >

            <button
              onClick={() => navigate("/cart")}
              className="
              bg-white
              border-2
              border-[#FF3B4E]
              text-[#FF3B4E]
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-[#FF3B4E]
              hover:text-white
              transition
              "
            >
              🛒 My Cart
            </button>

            <button
              onClick={logout}
              className="
              bg-[#FF3B4E]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:opacity-90
              transition
              "
            >
              Logout
            </button>

            {
            user?.role === "admin" && (
              <button
                onClick={() => navigate("/admin")}
                className="
                flex
                items-center
                gap-2
                bg-red-500
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-600
                transition
                "
              >
                <FaUserShield />
                <span>Admin Panel</span>
              </button>
            )
          }

          </div>

        </div>
      </div>
    </div>
  );
}