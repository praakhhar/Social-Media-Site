import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  {
    console.log(post);
  }
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div class="card my-post" style={{ width: "18rem;" }}>
        <div class="card-body">
          <h5 class="card-title">
            <span
              onClick={() => {
                deletePost(post.id);
              }}
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
            >
              <MdDelete />
              <span class="visually-hidden">unread messages</span>
            </span>
            {post.title}
          </h5>
          <p class="card-text">{post.body}</p>
          {post.tags.map((tag) => {
            return <span class="badge text-bg-dark my-tag">{tag}</span>;
          })}

          <div class="alert alert-dark" role="alert">
            <FaHeart /> : {post.reactions.likes}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
