// Example usage to retrieve user data
import React, { useEffect, useState } from 'react';
import { getUserData } from './httpService';

const ProfileComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(userId); // Replace userId with actual user ID
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData && (
        <>
          <h2>User Profile</h2>
          <p>Name: {userData.first_name} {userData.last_name}</p>
          <p>Email: {userData.email}</p>
          <img src={userData.avatar} alt="User Avatar" />
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
