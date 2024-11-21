import React from "react";
import { notification, Button } from "antd";

const Notifications = () => {
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description: "This is the content of the notification.",
    });
  };

  return (
    <div>
      <h2>Notifications</h2>
      <Button onClick={openNotification}>Open Notification</Button>
    </div>
  );
};

export default Notifications;
