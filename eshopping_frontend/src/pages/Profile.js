import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user,setUser] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if(currentUser){
      axios.get(`http://localhost:8080/api/auth/profile/${currentUser.id}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    }
  }, []);

  if(!user) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default Profile;
