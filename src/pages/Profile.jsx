import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [id]);

  if (!profile) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-cyan-600 mb-6">{profile.user.name} - Profile</h1>
      <p>Status: {profile.status}</p>
      <p>Company: {profile.company}</p>
      <p>Location: {profile.location}</p>
      <p>Skills: {profile.skills.join(', ')}</p>
      <p>Bio: {profile.bio}</p>

      {/* Orqaga qaytish */}
      <button 
        onClick={() => navigate(-1)} 
        className="mt-8 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
      >
       back
      </button>
    </div>
  );
};

export default Profile;
