import { useDispatch } from "react-redux";

export function fetch(payload) {
  return {
    type: 'GET_POST_DATA',
    payload: payload,
  };
}

export const GetPosts = async () => {
    const dispatch = useDispatch();
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({ type: 'GET_POST_DATA', payload: data });
};