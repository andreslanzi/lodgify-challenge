import axios from 'axios';
import { ProfileData } from '../types/types';

const getProfileData: () => Promise<ProfileData[]> = async () => {
  const response = await axios.get(
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'
  );
  return response.data;
};

export default getProfileData;
