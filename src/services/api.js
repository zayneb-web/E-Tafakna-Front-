import axios from 'axios';

const API_URL = 'http://localhost:3216/api';

export const sendProposalToJob = async (jobId, proposalData) => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('No JWT token found');
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
  
      console.log(`Sending proposal to: ${API_URL}/proposal/send/${jobId} with data:`, proposalData);
  
      const response = await axios.post(`${API_URL}/proposal/send/${jobId}`, proposalData, config);
      console.log('Response:', response);
  
      return response.data;
    } catch (error) {
      console.error('Error in sendProposalToJob:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? error.response.data.message : error.message);
    }
  };
  
export const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:3216/api/login', credentials);
      const { token } = response.data;
      localStorage.setItem('jwtToken', token); // Store JWT token in localStorage
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  export const handleLogin = (formData) => {
    return axios.create({}).post("http://localhost:3216/api/auth/register-condidate", formData)
};

export const handleRegister = (formData) => {
    return axios.create({}).post("http://localhost:3216/api/auth/login", formData)
};