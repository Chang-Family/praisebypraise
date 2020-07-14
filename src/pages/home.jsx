import React, { useState, useEffect } from "react";

const Home = () => {
  const getPosts = async () => {};

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <h2>List of posts:</h2>
    </div>
  );
};

export default Home;
