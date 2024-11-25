import axios from 'axios';

export async function signup(name,email,phoneNumber,password) {
    try {
      const res = await axios.get('http://localhost:5000/auth/signup',{
        name,email,phoneNumber,password
      })
      // Process the response data
      console.log(res.data);
    } catch (error) {
      // Handle error (network or response-related)
      console.error('Error:', error);
    }
  }