import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="form-group">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
