import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme kodunu buraya ekleyin
    console.log(formData);
    // Form verilerini sunucuya göndermek için Axios gibi bir kütüphane kullanabilirsiniz
  };

  return (
    <footer style={{ textAlign: 'center' }}>
      <p>Adres: Zafer Mah. Ankara yolu Caddesi. No: 1 16080 Osmangazi/BURSA</p>
      <p>Telefon: ALO 153 / 444 16 00</p>
      <form onSubmit={handleSubmit}>
        <h3>Dilek ve Şikayetler</h3>
        <div>
          <label htmlFor="name">Adınız:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="subject">Konu:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Mesajınız:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </footer>
  );
}

export default Footer;
