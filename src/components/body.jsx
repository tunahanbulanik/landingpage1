import React, { useState } from "react";
import "./body.css";

export default function body() {
  const [showMore, setShowMore] = useState(false);
  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <div className="section">
        <h2>Kediler</h2>
        <p>
          <p>
            Kediler, sevimli evcil hayvanlardır. Genellikle bağımsız ve oyuncu
            doğalarıyla bilinirler. İyi bir ev arkadaşıdırlar.
          </p>
          {showMore ? (
            <div className="more-info">
              <p>
                Kediler dünya üzerinde farklı türlere sahip olan sevimli evcil
                hayvanlardır. American Longhair, Bilecik Blackpanther, French
                Toast ve Mamak Kedisi gibi türler kediler arasında popülerdir.
                American Longhair, uzun tüylü ve zarif bir görünüme sahiptir.
                Bilecik Blackpanther, siyah tüyleriyle dikkat çekerken, French
                Toast tüylerinin rengiyle öne çıkar. Mamak Kedisi ise Türkiye'ye
                özgü bir türdür. Bu kediler, evcil hayvan severlerin ilgisini
                çeken sevimli ve oyunsever dostlardır.
              </p>
              <span className="show-more , link" onClick={toggleMoreInfo}>Kapatmak için tıklayın</span>
            </div>
          ) : (
            <span className="show-more , link" onClick={toggleMoreInfo}>
              Daha fazlası için tıklayın
            </span>
          )}
        </p>
      </div>

      <div>
        <div className="section">
          <h2>Köpekler</h2>
          <p>
            Köpekler, sadık ve dost canlısı evcil hayvanlardır. İyi birer bekçi
            ve oyun arkadaşı olabilirler.
          </p>
          {showMore? (
            <div className="more-info">
            <p>
            Maltese Bulldog, Caucassian Havhav ve Atlantic Mugodow gibi köpek türleri, sevimli ve sadık evcil hayvanlar arasında yer alır. Bu köpekler, oyuncu ve enerjik doğalarıyla bilinirler. Onlarla vakit geçirmek, keyifli anlar yaşamanıza olanak sağlar. Yweyweyweyw cinsi köpekler ise nadir rastlanan bir türdür. Bu köpekler, benzersiz görünümleri ve sevecen kişilikleriyle dikkat çekerler. Onlarla bir arada olmak, sevgi dolu anılar biriktirmenizi sağlar
            </p>
            </div>
          ) : (
            <span>Daha fazlası için tıklayın</span>
          )}
        </div>
      </div>
      <div>
        <div className="section">
          <h2>Mamalar</h2>
          <p>
            Mamalar, evcil hayvanların sağlıklı ve dengeli beslenmesini sağlayan
            yiyeceklerdir.
          </p>
        </div>
      </div>
    </div>
  );
}
