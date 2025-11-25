import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router";

const UpdateUser = () => {
  const navigate = useNavigate()
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    // password: "",
    role: "author",
  });

  const loadUserData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/user/${userId}`);
      const data = await res.json();

      setFormData({
        fullName: data.data.fullName || "",
        userName: data.data.userName || "",
        role: data.data.role || "author",
      });
    } catch (error) {
      console.log("error loading user data", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/v1/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.success(data.message);
      navigate("/admin/users")
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-medium">Update User</h2>
      </div>
      <div className="max-w-[600px] mx-auto bg-white p-6 md:p-10 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <div>
              <label
                className="text-muted mb-2 inline-block"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                className="input mb-4"
                placeholder="Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="text-muted mb-2 inline-block"
                htmlFor="userName"
              >
                User Name
              </label>
              <input
                id="userName"
                className="input mb-4"
                placeholder="User Name"
                type="text"
                value={formData.userName}
                onChange={handleChange}
                disabled
              />
            </div>
            <div>
              <label className="text-muted mb-2 inline-block" htmlFor="role">
                Role
              </label>
              <select
                className="input"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="author">Author</option>
              </select>
            </div>
          </div>

          <div>
            <button className="primary-btn w-full">Update User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
