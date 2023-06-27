import './App.css';
import { useEffect, useState } from 'react';
import { ProfileData } from './types/types';
import Dashboard from './components/Dashboard';
import getProfileData from './utils/getProfileData';

function App() {
  const [profileData, setProfileData] = useState<ProfileData[]>([]);

  const fetchProfileData = async () => {
    const data = await getProfileData();
    setProfileData(data);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="w-[90%] flex flex-col justify-center align-center items-center m-auto py-20 px-12">
      <Dashboard profileData={profileData} setProfileData={setProfileData} />
    </div>
  );
}

export default App;
