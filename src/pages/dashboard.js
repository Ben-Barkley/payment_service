import React from "react";
import { Layout, Button } from "antd";
import Notifications from "../components/Notifications";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <Content style={{ padding: "50px" }}>
      <h1>Dashboard</h1>
      <Notifications />
      <Button type="primary">Bill Payments</Button>
      <Button type="primary">Support Chat</Button>
      <Button type="primary">Budgeting Tools</Button>
      <Button type="primary">Payments & Transfers</Button>
      <Button type="primary">Account Management</Button>
      <Button type="primary">Transaction History</Button>
      <Button type="primary">Currency Conversion</Button>
    </Content>
  );
};

export default Dashboard;
