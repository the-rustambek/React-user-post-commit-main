import React from "react";

import useToken from "./Hooks/useToken";

function UnauthenticatedApp() {
  const [setToken] = useToken(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data));
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="heading">Login</h2>

      <div>
        <input
          className="login_input"
          type="email"
          placeholder="email"
          name="email"
          defaultValue="eve.holt@reqres.in"
          required
        />
      </div>

      <div>
        <input
          className="login_input"
          type="password"
          placeholder="password"
          name="password"
          defaultValue="cityslicka"
          required
        />
      </div>

      <button className="login_btn">Log in</button>
    </form>
  );
}

export default UnauthenticatedApp;
