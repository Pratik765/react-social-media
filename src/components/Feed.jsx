import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-store";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
const Feed = () => {
  const handleDelete = (item) => {
    deletePost(item);
  };
  const { defaultFeed, deletePost } = useContext(PostContext);
  const postList = useLoaderData();
  return (
    <>
      {postList.length == 0 && <Welcome />}
      {postList.map((item) => {
        return (
          <div
            className="card"
            style={{ margin: "20px 10px" }}
            key={item.title}
          >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              {item.tags.map((tag) => {
                return (
                  <span className="badge text-bg-primary hashtag" key={tag}>
                    {tag}
                  </span>
                );
              })}

              <div className="alert alert-success alert" role="alert">
                This post is reacted by {item.reactions} people!
              </div>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                <MdDelete />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Feed;
