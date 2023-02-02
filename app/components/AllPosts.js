import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { postsData } from "../data/postsdata";
import SinglePost from "./SinglePost";

const AllPosts = () => {
  return (
    <>
      {postsData.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </>
  );
};

export default AllPosts;

const styles = StyleSheet.create({});
