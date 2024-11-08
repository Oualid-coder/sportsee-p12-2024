import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

const SwitchUtilisateur = ({ onSwitchChange }) => {
  // Initialiser l'état avec la valeur du localStorage, ou 12 par défaut
  const [isUser12, setIsUser12] = useState(() => {
    const storedUser = localStorage.getItem('selectedUser');
    return storedUser ? storedUser === '12' : true;
  });

  // Mettre à jour localStorage et l'état parent lors du changement
  const handleSwitchChange = () => {
    const newUser = isUser12 ? 18 : 12;
    setIsUser12(!isUser12);
    localStorage.setItem('selectedUser', newUser); // Stocker dans localStorage
    onSwitchChange(newUser); // Mettre à jour l'état parent
  };

  // Lors de la première montée du composant, récupérer la valeur de localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      onSwitchChange(parseInt(storedUser, 10)); // Synchroniser avec le parent
    }
  }, [onSwitchChange]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>Switch</span>
      <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'red', marginLeft: '10px' }}>Utilisateur :</span>
      <Switch
        checked={isUser12}
        onChange={handleSwitchChange}
        offColor="#bbb"
        onColor="#ff0101"
        checkedIcon={<div style={{ paddingLeft: '8px', color: 'white' }}>12</div>}
        uncheckedIcon={<div style={{ paddingLeft: '8px', color: 'white' }}>18</div>}
        className="react-switch"
        height={30}
        width={60}
        handleDiameter={28}
      />
    </div>
  );
};

export default SwitchUtilisateur;
