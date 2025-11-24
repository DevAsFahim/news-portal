import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);

  const loadUserData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/user");
      const data = await res.json();

      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-medium">All Users</h2>
        <Link className="primary-btn" to="/register">
          Add User
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border border-gray-400 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-400">
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-lato font-bold uppercase"
                    >
                      S. No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-lato font-bold uppercase"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-lato font-bold uppercase"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-lato font-bold uppercase"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-lato font-bold uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-400">
                  {users &&
                    users.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-muted">
                          {index > 8 ? index+1 : `0${index+1}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-muted">
                          {user.fullName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {user.userName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-end gap-4">
                          <button type="button" className="table-action">
                            <FiEdit />
                            Edit
                          </button>
                          <button type="button" className="table-action-delete">
                            <FaTrashAlt />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
      <nav className="flex items-center gap-x-1 mt-10" aria-label="Pagination">
        <button
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 cursor-pointer hover:bg-blue/50 focus:outline-hidden focus:bg-blue/50 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
          disabled=""
        >
          <span>Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-blue/70 text-white py-2 px-3 text-sm rounded-lg cursor-pointer focus:outline-hidden focus:bg-blue/50 disabled:opacity-50 disabled:pointer-events-none"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-blue/50 py-2 px-3 text-sm rounded-lg cursor-pointer focus:outline-hidden focus:bg-blue/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            2
          </button>
          <button
            type="button"
            className="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-blue/50 py-2 px-3 text-sm rounded-lg cursor-pointer focus:outline-hidden focus:bg-blue/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            3
          </button>
        </div>
        <button
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 cursor-pointer hover:bg-blue/50 focus:outline-hidden focus:bg-blue/50 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <span>Next</span>
        </button>
      </nav>
    </div>
  );
};

export default Users;
