import fetch from 'node-fetch';

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        console.log(`User: ${data.name}, Email: ${data.email}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function fetchUsername(username) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        if (!response.ok) throw new Error('User not found');
        const users = await response.json();
        if (users.length === 0) throw new Error('User not found');

        const data = users[0]; // Get the first matching user
        console.log(`User: ${data.name}, Email: ${data.email}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call functions
fetchUserData(3);
fetchUsername("Kamren");
