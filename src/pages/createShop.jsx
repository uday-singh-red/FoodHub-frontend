import { useState } from "react";

export default function CreateShop() {
  const [shopName, setShopName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [shopLogo, setShopLogo] =
    useState(null);

  const [shopBanner, setShopBanner] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "shopName",
        shopName
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "phone",
        phone
      );

      formData.append(
        "email",
        email
      );

      formData.append(
        "address",
        address
      );

      if (shopLogo) {
        formData.append(
          "shopLogo",
          shopLogo
        );
      }

      if (shopBanner) {
        formData.append(
          "shopBanner",
          shopBanner
        );
      }

      const res =
        await fetch(
          "http://localhost:5000/api/v1/shops/create",
          {
            method: "POST",
            credentials: "include",
            body: formData
          }
        );

      const data =
        await res.json();

      console.log(data.message);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      max-w-3xl
      mx-auto
      mt-10
      bg-white
      p-8
      rounded-2xl
      shadow-lg
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        text-center
        mb-8
        "
      >
        Create Shop
      </h1>

      <form
        onSubmit={submitHandler}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Shop Name"
          value={shopName}
          onChange={(e) =>
            setShopName(
              e.target.value
            )
          }
          required
          className="
          w-full
          border
          p-3
          rounded-lg
          "
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          rows={4}
          className="
          w-full
          border
          p-3
          rounded-lg
          "
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          rounded-lg
          "
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          rounded-lg
          "
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) =>
            setAddress(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          rounded-lg
          "
        />

        <div>
          <label
            className="
            block
            mb-2
            font-semibold
            "
          >
            Shop Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setShopLogo(
                e.target.files[0]
              )
            }
          />
        </div>

        <div>
          <label
            className="
            block
            mb-2
            font-semibold
            "
          >
            Shop Banner
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setShopBanner(
                e.target.files[0]
              )
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
          w-full
          bg-red-500
          text-white
          py-3
          rounded-lg
          hover:bg-red-600
          transition
          "
        >
          {loading
            ? "Creating..."
            : "Create Shop"}
        </button>
      </form>
    </div>
  );
}