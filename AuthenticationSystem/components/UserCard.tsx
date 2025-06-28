"use client";

import { useState } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface UserCardProps {
  user: User;
  onUpdate: (user: User) => void;
  onDelete: (userId: string) => void;
}

const UserCard = ({ user, onUpdate, onDelete }: UserCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleUpdate = () => {
    onUpdate({ ...user, name, email, role });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label>Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">Role: {user.role}</p>
          <div className="flex space-x-2 mt-4">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Edit
            </button>
            <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
