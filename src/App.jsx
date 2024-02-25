import { useState } from 'react'
import Header from './Header'
import './App.css'
import Mainmenu from './Mainmenu'
import Footer from './Footer'
import Main2 from './Main2'
import Gallery from './Gallery'
function App() {
  const [count, setCount] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const regions = [
    { name: 'Akıll Şehir', image: 'https://akillisehirler.gov.tr/wp-content/uploads/ProjeEnvanteri/image/image/16525.png',description: 'Türkiye’de Akıllı Şehircilik ve İnovasyon Dairesi Başkanlığını ilk kuran belediye olan, bu alanda yaptığı çalışmalarla Birleşik Krallık Dışişleri ve Kalkınma Bakanlığının ‘Küresel Geleceğin Şehirleri Programı’ kapsamında hibe desteği kazanan Bursa Büyükşehir Belediyesi, şimdi de Akıllı Şehir Akademisi’ni kurdu. Akıllı şehre dönüşüm çalışmalarını hız kesmeden sürdüren Büyükşehir Belediyesi’nin belirli aralıklarla düzenleyeceği programda, ‘Akıllı şehircilik nedir?’, ‘Türkiye’den ve dünyadan örnekler’, ‘Dijital dönüşüm’, ‘Blok zincir’, ‘Büyük veri nedir?’, ‘Veri nasıl toplanır?’, ‘Akıllı şehir yönetiminde verinin önemi, toplanması, anlamlandırılması, proje ve fikirlere dönüştürülmesi’ gibi konu başlıklarına yer verildi.'  },
    { name: 'Rezerv Alanları', image: 'https://www.yeniemlak.com/uploads/1/8/6/bursa-soganlida-500-rezerv-konut-uretilecek-projesi-186709-1573303201.jpeg',description:'6306 Afet Yasası kapsamında Bursa’nın çeşitli bölgelerinde Çevre ve Şehircilik Bakanlığı tarafından Rezerv Alanları belirlenmiştir. Rezerv Alanlarına yönelik Bakanlık tarafından çıkarılan Yönetmelikte, bu alanların gerek riskli alanlarda yaşayanların taşınacağı alanlar olarak gerekse Afet Yasasının uygulanmasında “maddi kaynak” olarak kullanılabileceği açıkça belirtilmektedir. Bu yönüyle rezerv alanlarının açıkça rant projelerinde kullanılabileceği itiraf edilmektedir. Belirlenen alanların hem kent içindeki değerli alanlardan hem de tarım ve orman alanlarından seçilmesi de; bu alanların  ranta konu olabilecek bölgelerdeki yapılaşmanın önünü açtığını açıkça göstermektedir. Özetle rezerv alanlar, kente karşı işlenebilecek önemli suç alanı potansiyellerini beraberinde getirmektedir.' },
    // Diğer bölge verileri
  ];

  return (
    <div className='App'>
      <Header onItemClick={handleItemClick}/>
      <div className="main-content">
        {selectedItem === "Hakkımda" && (
          <div>
            <h2>Projenin Amacı ve Açıklaması</h2>
            <p>Akıllı Şehir alanında farkındalığı artırmak ve uygulamaların geniş kitlelere duyurulması amacıyla ‘Akıllı Şehir Akademisi’ kuruldu. Akademi bünyesinde Akıllı Şehir alanına ilgi duyan, öğrenmeye, üretmeye hevesli öğrenciler, girişimciler ve vatandaşlarımız için kısaca tüm paydaşlarımız için Tasarım Odaklı Düşünme, Değer Önerisi Modeli, Veri Yönetimi gibi pek çok eğitimle birlikte Yazılımcı Yetiştirme Programını gibi kısa ve uzun vadeli eğitim programları hayata geçirilmektedir.</p>
            <h2>Projenin Vizyonu</h2>
            <p>Planlanan etkinliklerde; akıllı şehircilik nedir, ülkemizden ve Dünya’dan örnekler, dijital dönüşüm, blok zincir, büyük veri nedir, veri nasıl toplanır, akıllı şehir yönetiminde verinin önemi, toplanması, anlamlandırılması, proje ve fikirlere dönüştürülmesi gibi konular üzerinde bilgi sahibi olmak ve bunun üzerinde çalışmalar yapmak amacıyla bu proje gerçekleştirilmektedir.</p>
            <h2>Projenin Ölçeği</h2>
            <p>Kent bütünü</p>
            <h2>Projede Uygulanan Teknolojiler</h2>
            <p>Bilişim Teknolojileri</p>
          </div>
        )}
        {selectedItem === "Galeri" && (
          <Gallery /> 
        )}
        
      </div>
      <Main2 regions={regions} />
      <Mainmenu/>
      <Footer/>
    </div>
  )
}

export default App
