import React from 'react';

export default function Home() {
  // Hardcoded users data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    // Add more static user data if needed
  ];

  return (
    <div>
      <div className='users_dashboard'>
        <h1>Users</h1>
        <p>{users.length}</p>
      </div>
    </div>
  );
}
