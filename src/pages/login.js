import React from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLogin = (values) => {
    console.log("Login Success:", values);
    // Add authentication logic here
    router.push("/dashboard"); // Redirect to dashboard on success
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login</h1>
      <Form onFinish={handleLogin}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
