import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../services/apiService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ActivityChart from '../components/ActivityChart';
import SessionsChart from '../components/SessionsChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import NutritionInfo from '../components/NutritionInfo';
import './ProfilePage.css';

const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(userId);
        setUserData(data);
      } catch (err) {
        setError('Une erreur est survenue lors de la récupération des données utilisateur.');
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData || !userData.userInfos) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="profile-page">
      <Sidebar />
      <Header user={userData.userInfos} />
      <div className="content">
        <div className='wrapper-activity-charts'>     
        {/* Activité quotidienne (full width on top) */}
        <div className="daily-activity">
          <ActivityChart data={userData.activity.sessions} />
        </div>
        {/* Grid for charts */}
        <div className="charts">         
            <SessionsChart data={userData.averageSessions.sessions} />          
            <PerformanceChart data={userData.performance} />
            <ScoreChart score={userData.todayScore} />          
        </div>
        </div> 
        {/* Infos nutritionnelles */}        
          <NutritionInfo nutritionData={userData.keyData} />       
      </div>
    </div>
  );
};

export default ProfilePage;
