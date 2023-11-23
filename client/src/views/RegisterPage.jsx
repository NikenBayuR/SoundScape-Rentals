import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const RegisterViews = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/users/register`, credentials);

      console.log(response.data);
      const { access_token } = response.data;

      localStorage.setItem('access_token', access_token);

      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              name="email"
              placeholder="Enter your email..."
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              required
              name="password"
              placeholder="Enter password..."
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-sm">
          Already have an account? Register{' '}
          <Link to="/login" className="text-blue-500">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterViews;
