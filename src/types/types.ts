export type ProfileData = {
  name: string;
  tasks: Task[];
};

export type Task = {
  description: string;
  value: number;
  checked: boolean;
};
