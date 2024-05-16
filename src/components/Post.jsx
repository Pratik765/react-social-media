import { Form, redirect } from "react-router-dom";

const Post = () => {
  // const navigate = useNavigate();
  // const userIDElement = useRef();
  // const titleElement = useRef();
  // const bodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();
  // const { addPost } = useContext(PostContext);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const userId = userIDElement.current.value;
    // const title = titleElement.current.value;
    // const body = bodyElement.current.value;
    // const reactions = reactionsElement.current.value;
    // const tags = tagsElement.current.value.split(" ");
    /*titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    hashtagsElement.current.value = "";*/
    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     userId,
    //     title,
    //     body,
    //     reactions,
    //     tags,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((post) => {
    //     addPost(post);
    //     navigate("/");
    //   });
  };
  return (
    <Form method="POST" style={{ margin: "10px" }}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="input"
          className="form-control"
          id="userId"
          placeholder="Enter youser ID"
          name="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="input"
          className="form-control"
          id="title"
          placeholder="Enter Post Title"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Write something
        </label>
        <textarea
          type="input"
          className="form-control"
          id="body"
          placeholder="Tell us something more"
          rows="5"
          name="body"
        />
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="input"
            className="form-control"
            id="reactions"
            placeholder="Enter Number Of Reactions"
            name="reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Hashtags
          </label>
          <input
            type="input"
            className="form-control"
            id="hashtags"
            placeholder="Enter Hashtags"
            name="tags"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function postAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postData }),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default Post;
