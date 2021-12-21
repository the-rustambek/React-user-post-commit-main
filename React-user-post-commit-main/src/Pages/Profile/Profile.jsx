import React from "react";
import { useParams, Link } from "react-router-dom";

import "../Profile/Profile.scss";
function Profile() {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users/" + id)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, [id]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((post) => {
        const filteredPost = post.filter((posts) => posts.userId === data.id);
        setPost(filteredPost);
        console.log(filteredPost);
      });
  }, [data]);

  return (
    <>
      <div className="profile_box">
        {data && (
          <>
            <h2>Profile</h2>
            <p>Hey, I am {data.first_name + " " + data.last_name}!</p>
            <div>
              <img
                src={data.avatar}
                alt={data.first_name + " " + data.last_name + "image"}
                width={200}
                height={200}
              />
            </div>
            {post.length > 0 &&
              post.map((row) => (
                <div className="post_list">
                  <li key={row.id}>
                    <div className="user_post ">
                      <p className="post_id">{row.id}</p>
                    </div>
                    <Link to={`/posts/${row.id}`}>User Post</Link>
                  </li>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
