import React, { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { BiTask } from 'react-icons/bi';
import { ProfileData, Task } from '../../types/types';

const Collapse = ({
  name: title,
  tasks,
  isLast,
  setProfileData,
  profileData
}: ProfileData & {
  isLast: boolean;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData[]>>;
  profileData: ProfileData[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isCompleted = !tasks.find((t) => !t.checked);

  const handleTaskClick = (t: Task) => {
    const profileDataCopy = [...profileData];
    profileDataCopy.map((stage) => {
      const taskToUpdate = stage.tasks.find((task) => task.description === t.description);
      if (taskToUpdate) {
        taskToUpdate.checked = !taskToUpdate?.checked;
      }
    });
    setProfileData(profileDataCopy);
  };

  return (
    <div className={`py-6 px-6 ${!isLast ? ' border-solid border-b border-gray-300' : ''}`}>
      <div className="flex flex-inline justify-between">
        <div
          className="flex flex-inline self-start justify-center align-center items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          <BiTask className={`mr-2 ${isCompleted && 'text-green-600'}`} />
          <h2 className={`font-semibold ${isCompleted && 'text-green-600'}`}>{title}</h2>
        </div>
        <button
          className="flex flex-inline justify-center align-center content-center items-center"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="mr-2">{isOpen ? 'Hide' : 'Show'}</span>
          {isOpen ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </button>
      </div>
      {isOpen &&
        tasks.map((t, idx) => (
          <div className="flex flex-inline px-2 mt-4" key={idx}>
            <input
              type="checkbox"
              checked={t.checked}
              className="mr-6 accent-green-600"
              onChange={() => handleTaskClick(t)}
            />
            <h2>{t.description}</h2>
          </div>
        ))}
    </div>
  );
};

export default Collapse;
