import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box p={3} flex={4}>
      {Array.apply(0, Array(10)).map((index) => {
        return (
          <>
            <Post key={Math.round(100)}
              avatar="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg"
              image="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912__340.jpg"
            />
            <Post
              avatar="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
              image="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__340.jpg"
            />
            <Post
              avatar="https://cdn.pixabay.com/photo/2016/04/27/20/38/girl-1357485__340.jpg"
              image="https://cdn.pixabay.com/photo/2021/06/09/01/55/worker-6322085_960_720.jpg"
            />
            <Post
              avatar="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg"
              image="https://cdn.pixabay.com/photo/2015/02/08/22/08/strawberries-629180_960_720.jpg"
            />
            <Post
              avatar="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg"
              image="https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501_960_720.jpg"
            />
          </>
        );
      })}
    </Box>
  );
}

export default Feed;
