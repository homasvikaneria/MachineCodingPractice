// frontend/practice/src/components/FormValidation.jsx
import React, { useState, useEffect } from 'react'

function FormValidation() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  useEffect(() => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(email !== "" && !pattern.test(email));
  }, [email]); // Fixed: Added email dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPassInvalid = password.length < 4 || password.length > 10; // Fixed: Logic
    setPasswordError(isPassInvalid);

    // Fixed: logic check and used setSubmittedData instead of handleSubmit
    if (!emailError && !isPassInvalid && email !== "") {
      setSubmittedData({ email, password }); 
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        {emailError && <p>Email error</p>}
        
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        {passwordError && <p>Password error</p>}
        
        <button type='submit'>submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  )
}

export default FormValidation;
