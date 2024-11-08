import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage.js';
import SwitchUtilisateur from './components/SwitchUser';
import { useState } from 'react';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(() => {
    // Récupérer l'utilisateur sélectionné depuis localStorage, ou 12 par défaut
    const storedUser = localStorage.getItem('selectedUser');
    return storedUser ? parseInt(storedUser, 10) : 12;
  });
  const navigate = useNavigate();

  // Fonction de gestion du clic sur "Profil"
  const handleProfileClick = () => {
    navigate(`/user/${selectedUserId}`);
  };

  return (
    <div>
      <Navbar onProfileClick={handleProfileClick} />
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Accueil</h1>
            <SwitchUtilisateur onSwitchChange={setSelectedUserId} />
          </div>
        } />
        <Route path="/user/:userId" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
