import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username.trim() === "" || password.trim() === "") {
      setError("Please fill in both fields.");
      return;
    }

    // Simulate a login process
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      setError(""); // Clear any previous error
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "1rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "0.875rem" }}>{error}</p>
        )}
        <button type="submit" style={{ padding: "0.5rem", width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
