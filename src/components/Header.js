import React from 'react';

const Header = ({ user }) => {
  // Vérifiez que l'objet user existe avant d'accéder à ses propriétés
  if (!user) {
    return <div>User data is missing</div>;
  }

  return (
    <header className="header">
      <h1>Bonjour, {user.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Header;
