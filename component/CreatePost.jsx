import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/[\s,]+/);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: { likes: reactions },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        addPost(res);
        navigate("/");
      });
  };

  return (
    <>
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            placeholder="who are you xd"
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            placeholder="What got you hooked today"
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            placeholder="people would love to know more about it"
            ref={postBodyElement}
            className="form-control"
            id="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsElement}
            type="number"
            className="form-control"
            id="reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            placeholder="tags for reach?"
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
