import fetch from 'node-fetch';

const getAccountDetails = async (accountId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${accountId}`);
        if (!response.ok) throw new Error("Account not found!");
        
        const data = await response.json();
        console.log(`Account Holder: ${data.name}, Email: ${data.email}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

// Run the function
getAccountDetails(2);
