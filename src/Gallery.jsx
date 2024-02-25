// Gallery.jsx

import React from 'react';

function Gallery() {
  const images = [
    { id: 1, src: 'https://avatars.mds.yandex.net/i?id=85eef7ef6c1ad4c81351706f0b4460f18d0e2115-8277774-images-thumbs&n=13', alt: 'Resim 1', description: 'Resim 1' },
    { id: 2, src: 'https://bursatanitim.gov.tr/wp-content/uploads/2021/10/30630_MTYxNWVhM2_11-scaled.jpg', alt: 'Resim 2', description: 'Resim 2' },
    { id: 3, src: 'https://www.bursa.bel.tr/dosyalar/resimler/haberler/30630_MTYxNWVhM2_17.jpg', alt: 'Resim 3', description: 'Resim 3' },
  ];

  return (
    <div className="gallery">
      <h2>Galeri</h2>
      <div className="gallery-images">
        {images.map((image) => (
          <div key={image.id} className="gallery-image">
            <img height="300px" src={image.src} alt={image.alt} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
