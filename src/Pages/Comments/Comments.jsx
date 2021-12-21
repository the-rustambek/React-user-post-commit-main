import React from "react";
import { useParams, Link } from "react-router-dom";

import "../Profile/Profile.scss";
function Comment() {
  const { id } = useParams();
  const [comment, setComment] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/" + id)
      .then((response) => response.json())
      .then((comment) => setComment(comment));
    console.log(id);
  }, [id]);

  return (
    <>
      <div className="post-box">
        {comment && (
          <>
            <h2>Comment</h2>

            <div className="comment-box">
              <p>{comment.id}</p>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
            {comment.length > 0 &&
              comment.map((row) => (
                <div className="comment_list">
                  <li key={row.id}>
                    <div className="user_comment ">
                      <p className="comment_id">{row.id}</p>
                    </div>
                    <Link to={`/comments/${row.id}`}>User Post</Link>
                  </li>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default Comment;
