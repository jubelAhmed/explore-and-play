import React from 'react';

interface User {
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h4 className="font-bold">{user.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{user.role}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;