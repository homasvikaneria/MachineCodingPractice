import React, { useState, useEffect } from 'react';

const App = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Use Effect to validate the email on every change
  useEffect(() => {
    const validateEmail = (email) => {
      if (!emailPattern.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    };

    if (email !== '') {
      validateEmail(email);
    }
  }, [email]);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Validate password length (between 4 and 10 characters)
    if (password.length < 4 || password.length > 10) {
      setPasswordError(true);
      return; // Stop submitting if password is not valid
    } else {
      setPasswordError(false);
    }

    // If both email and password are valid, show the submitted data
    if (!emailError && !passwordError) {
      setSubmittedData({ email, password });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      {submittedData && (
        <div className="bg-green-50 text-green-800 p-4 mb-5 rounded-lg shadow-lg w-full sm:w-96">
          <h3 className="font-semibold text-xl">Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">Please enter a valid email.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">Password must be between 4 and 10 characters.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
