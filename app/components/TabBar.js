import React, { useState } from "react";
import { Tab, Text, TabView } from "@rneui/themed";

export const TabBar = () => {
  const [index, setIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Tab
        value={index}
        disableIndicator={true}
        onChange={(e) => {
          setIndex(e);
        }}
        variant="default"
        style={{
          height: 50,
        }}
      >
        <Tab.Item
          onPress={() => console.log("home")}
          active={true}
          icon={{ name: "home", type: "ionicon", color: "#000" }}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "user-friends", type: "font-awesome-5", color: "#000" }}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "message1", type: "antdesign", color: "#000" }}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={{
            name: "notifications-outline",
            type: "ionicon",
            color: "#000",
          }}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={{
            name: "ondemand-video",
            type: "materialIcons",
            color: "#000",
          }}
        />
        <Tab.Item
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "shop", type: "entypo", color: "#000" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationConfig>
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
