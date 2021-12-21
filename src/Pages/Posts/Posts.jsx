import React from "react";
import { useParams, Link } from "react-router-dom";

import "../Profile/Profile.scss";
function Post() {
  const { id } = useParams();
  const [post, setPost] = React.useState({});
  const [comment, setComment] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/" + id)
      .then((response) => response.json())
      .then((post) => setPost(post));
    console.log(id);
  }, [id]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comment) => {
        const filteredComment = comment.filter(
          (comments) => comments.postId === post.id
        );
        setComment(filteredComment);
        console.log(filteredComment);
      });
  }, [post]);

  return (
    <>
      <div className="post-box">
        {post && (
          <>
            <h2>Post</h2>

            <div className="post-box">
              <p>{post.id}</p>
              <p>{post.body}</p>
              <p>{post.title}</p>
            </div>
            {comment.length > 0 &&
              comment.map((row) => (
                <div className="post_list">
                  <li key={row.id}>
                    <div className="user_post ">
                      <p className="post_id">{row.id}</p>
                    </div>
                    <Link to={`/comments/${row.id}`}>User Comments</Link>
                  </li>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default Post;
