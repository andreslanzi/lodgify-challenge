import React from 'react';
import ProgressBar from '../ProgressBar';
import { getProgress } from '../../utils/getProgress';
import { ProfileData } from '../../types/types';
import Collapse from '../Collapse';

type DashboardProps = {
  profileData: ProfileData[];
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData[]>>;
};

const Dashboard = ({ profileData, setProfileData }: DashboardProps) => {
  return (
    <div className="bg-white w-full py-8 px-4 rounded-xl">
      <ProgressBar completedProgress={getProgress(profileData)} />
      <div className="border-solid border border-gray-300 rounded-t-lg rounded-b-lg bg-white w-full   ">
        {profileData.map((pd: ProfileData, index: number) => (
          <Collapse
            name={pd.name}
            tasks={pd.tasks}
            isLast={profileData.length === index + 1}
            setProfileData={setProfileData}
            profileData={profileData}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
