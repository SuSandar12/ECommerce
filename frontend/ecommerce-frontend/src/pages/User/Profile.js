import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    country: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user?.id) {
      API.get(`/users/${user.id}`).then((res) => {
        setProfile({
          username: res.data.username || "",
          email: res.data.email || "",
          phone: res.data.phoneNumber || "",
          address: res.data.deliveryAddress || "",
          country: res.data.country || "",
        });
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    API.put(`/users/${user.id}`, profile).then(() => {
      alert("Profile updated successfully ✅");
      setIsEditing(false);
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">My Profile</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded-lg">{profile.username}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded-lg">{profile.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded-lg">{profile.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          {isEditing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded-lg">{profile.address}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          {isEditing ? (
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          ) : (
            <p className="p-2 bg-gray-50 rounded-lg">{profile.country}</p>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
