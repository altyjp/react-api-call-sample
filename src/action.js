export const GetPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return { type: 'GET_POST_DATA', payload: data };
};