import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-cyan-600 mb-6">Post Details</h1>
      <p className="text-lg">Post ID: {id}</p>
      <p className="mt-4">Bu yerda post haqidagi to‘liq ma’lumot bo‘ladi.</p>

      {/* Ortga qaytish tugmasi */}
      <button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
      >
        back
      </button>
    </div>
  );
};

export default PostDetails;
