import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(false); // State to manage loading
  const router = useRouter();

  const handleLogin = (values) => {
    setLoading(true); // Set loading state
    console.log("Login Attempt:", values);

    // Mock authentication logic
    const { username, password } = values;
    if (username === "user" && password === "password") {
      // Mock successful authentication
      const mockToken = "12345"; // Replace with actual token from backend
      localStorage.setItem("authToken", mockToken); // Save token in localStorage
      message.success("Login successful!");
      setLoading(false);
      redirect("/dashboard"); // Redirect to dashboard
    } else {
      // Handle failed login
      message.error("Invalid username or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
