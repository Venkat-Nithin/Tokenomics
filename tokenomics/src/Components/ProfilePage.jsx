import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleSave = () => {
    setUser({ name: newName, email: newEmail });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {isEditing ? (
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
