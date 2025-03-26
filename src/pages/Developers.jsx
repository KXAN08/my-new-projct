import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Developers = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get('https://nt-devconnector.onrender.com/api/profile');
        setProfiles(res.data);
      } catch (error) {
        console.error("Server sekin ishlayapti yoki API Error");
      }
    };
    fetchProfiles();
  }, []);

  if (profiles.length === 0) return <p className="p-10">Loading Developers...</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-cyan-600 mb-6">Developers</h1>
      {profiles.map((profile) => (
        <Link to={`/profile/${profile.user._id}`} key={profile._id}>
          <div className="bg-gray-200 p-5 rounded mb-5 hover:bg-cyan-100 transition cursor-pointer">
            <h2 className="text-xl font-bold">{profile.user.name}</h2>
            <p>{profile.status} at {profile.company}</p>
            <p>{profile.location}</p>
            <p className="text-cyan-600">{profile.skills.join(', ')}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Developers;
