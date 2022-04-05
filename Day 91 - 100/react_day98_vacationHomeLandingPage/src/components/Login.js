import React from "react";

const Login = () => {
  return (
    <>
      <section className="showcase login">
        <div className="overlay">
          <form action="" className="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <input
              type="password"
              className="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button className="submit">Log In</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
