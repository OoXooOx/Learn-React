import "./Post.css";

function Post({ id, title, userId, body }) {
    // console.log(props);

    return (
        <h1>
            <div className="post">
                <small>{id}</small>
                <h2>{title}</h2>
                <p>{body}</p>
                <h3>User ID: {userId}</h3>
            </div>
        </h1>
    )
}
export default Post;
