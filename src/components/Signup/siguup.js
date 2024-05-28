import React from "react";  

function SignUp(){
    return(
        <div>
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
}
export default SignUp;