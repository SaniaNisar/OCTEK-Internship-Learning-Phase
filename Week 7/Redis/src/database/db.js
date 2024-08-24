// Simulate a database with hardcoded data
let mockDatabase = {
    '1': { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    '2': { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' }
  };
  
  const getUserFromDatabase = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDatabase[id] || null);
      }, 100); // Simulate network delay
    });
  };
  
  const addUserToDatabase = async (id, name, email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockDatabase[id] = { id, name, email };
        resolve(mockDatabase[id]);
      }, 100); // Simulate network delay
    });
  };
  
  module.exports = { getUserFromDatabase, addUserToDatabase };
  