import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    role: "author",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)
    
    try {
      const res = await fetch("http://localhost:3000/api/v1/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      toast.success(data.message);
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-medium">All Users</h2>
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
              />
            </div>
            <div>
              <label
                className="text-muted mb-2 inline-block"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="input mb-4"
                id="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
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
            <button className="primary-btn w-full">Create User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
