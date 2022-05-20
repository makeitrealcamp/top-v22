import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/reducers/Posts.reducer";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading === true) {
    return <p>Loading...</p>;
  }

  if (error !== null) {
    return <p>UPS! ocurrió un error. Error:{error}</p>;
  }

  return posts.map((item, index) => {
    return (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    );
  });
};

export default Posts;
