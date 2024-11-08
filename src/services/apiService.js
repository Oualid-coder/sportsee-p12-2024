import axios from 'axios';
import { standardizeUserData } from './dataFormatter';

const API_URL = 'http://localhost:3000';

export const getUserData = async (userId) => {
  try {
    const userResponse = await axios.get(`${API_URL}/user/${userId}`);
    const userData = standardizeUserData(userResponse.data.data);

    const activityResponse = await axios.get(`${API_URL}/user/${userId}/activity`);
    const activityData = activityResponse.data.data;

    const averageSessionsResponse = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
    const averageSessionsData = averageSessionsResponse.data.data;

    const performanceResponse = await axios.get(`${API_URL}/user/${userId}/performance`);
    const performanceData = performanceResponse.data.data;

    return {
      ...userData,
      activity: {
        sessions: activityData.sessions || [],
      },
      averageSessions: {
        sessions: averageSessionsData.sessions || [],
      },
      performance: {
        kind: performanceData.kind || {},
        data: performanceData.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};
