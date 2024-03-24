import { Button, Flex, Input, Space } from "antd";
import React from "react";

function Mycolor() {
  return (
    <Flex
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Flex
        style={{
          width: "50vw",
          height: "100vh",
          margin: "0 25vw",
        }}
        justify="center"
        align="center"
        vertical
      >
        <Space>
          <Button type="primary">Submit</Button>
          <Input placeholder="Enter name" />
        </Space>
      </Flex>
    </Flex>
  );
}

export default Mycolor;
