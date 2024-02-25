import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Mainmenu() {
  const [selectedNews, setSelectedNews] = useState(null); // Seçili haber
  const [newsData, setNewsData] = useState([]); // Haber verileri

  useEffect(() => {
    fetch('/anakucagi_merkezleri.geojson')
      .then(response => response.json())
      .then(data => setNewsData(data.features))
      .catch(error => console.error('JSON dosyası yüklenirken bir hata oluştu: ', error));
  }, []);

  // Habere tıklandığında
  const handleNewsClick = (newsData) => {
    setSelectedNews(newsData);
  };

  // Geri dön butonuna tıklandığında
  const handleBackClick = () => {
    setSelectedNews(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <main className="main-content">
      <section className="news-section">
        <h2>Haberler</h2>
        <Slider {...settings}>
        {newsData.map(news => (
  <div key={news.properties.OBJECTID} className="news-card" onClick={() => handleNewsClick(news)}>
    <h3>{news.properties.ADI}</h3>
    <p>{news.properties.ADRES}</p>
    {news.properties.RESIM_URL === 1 && <img src={haber1Resim} alt={news.properties.ADI} />}
    {news.properties.RESIM_URL === 2 && <img src={haber2Resim} alt={news.properties.ADI} />}
  </div>
))}

        </Slider>
      </section>
      {selectedNews && (
        <div className="news-modal">
          <div className="news-modal-content">
            <span className="close" onClick={handleBackClick}>&times;</span>
            <h2>{selectedNews.properties.title}</h2>
            <p>{selectedNews.properties.content}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Mainmenu;
