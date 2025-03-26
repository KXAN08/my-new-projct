import { Link } from 'react-router-dom';

const Posts = () => {

  // function logOut(){
  //   loc
  // }
  const posts = [
    { id: 1, title: 'Frontend haqida', author: 'John Doe', text: 'Bu frontend post...' },
    { id: 2, title: 'Backend haqida', author: 'Jane Smith', text: 'Bu backend post...' },
    { id: 3, title: 'React haqida', author: 'Ali', text: 'React komponentlar haqida to‘liq malumot.' },
    { id: 4, title: 'html haqida', author: 'Polat', text: 'htlm komponentlar haqida to‘liq malumot.' },
    { id: 5, title: 'css haqida', author: 'Yusuf', text: 'css komponentlar haqida to‘liq malumot.' }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-cyan-600 mb-6">Posts</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 hover:bg-cyan-100 cursor-pointer transition">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.text}</p>
            <p className="mt-4 text-gray-500">Author: {post.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
