import { createContext, useReducer } from "react";

export const PostContext = createContext({
  defaultFeed: [],
  addPost: () => {},
  deletePost: () => {},
});
const loadPostsReducer = (currPost, action) => {
  let newPost = currPost;
  if (action.type === "ADD_POST") {
    newPost = [action.payload.post, ...currPost];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPost = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPost = currPost.filter((item) => {
      return item.title !== action.payload.title.title;
    });
  }
  return newPost;
};
const PostContextProvider = ({ children }) => {
  const [defaultFeed, dispatch] = useReducer(loadPostsReducer, [
    // {
    //     id: Date.now(),
    //     title: "Pratik",
    //     body: "Sample",
    //     reactions: "4",
    //     userID: "sample",
    //     hashtags: "sample",
    // },
  ]);
  const addPost = (post) => {
    const addPostSend = {
      type: "ADD_POST",
      payload: {
        post,
      },
    };
    dispatch(addPostSend);
  };
  // const addInitialPosts = (posts) => {
  //   const addInitialPostsSend = {
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   };
  //   dispatch(addInitialPostsSend);
  // };
  const deletePost = (title) => {
    const deletePostSend = {
      type: "DELETE_POST",
      payload: {
        title,
      },
    };
    dispatch(deletePostSend);
  };
  return (
    <PostContext.Provider value={{ defaultFeed, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
