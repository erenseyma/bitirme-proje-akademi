import React from 'react';
import './App.css';

function Main2({ regions }) {
  return (
    <div className="main2">
      {regions.map((region, index) => (
        <div key={index} className="region">
          <img src={region.image} alt={region.name} width="260" height="130" />
          <p>{region.name}</p>
          <p>{region.description}</p> {/* Her bölgeye ait açıklamayı buraya ekleyebilirsiniz */}
        </div>
      ))}
    </div>
  );
}

export default Main2;
