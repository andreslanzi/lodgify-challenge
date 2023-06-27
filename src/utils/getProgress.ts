import { ProfileData, Task } from '../types/types';

export const getProgress: (profileData: ProfileData[]) => number = (profileData) => {
  const allTasks: Task[] = [];
  profileData.forEach((data: ProfileData) => {
    data.tasks.forEach((t) => allTasks.push(t));
  });

  const totalPoints = allTasks.reduce((acc, curr) => (acc = acc + curr.value), 0);
  const completedPoints = allTasks.reduce(
    (acc, curr) => (curr.checked ? (acc = acc + curr.value) : acc),
    0
  );

  return Math.round((completedPoints / totalPoints) * 100) || 0;
};
