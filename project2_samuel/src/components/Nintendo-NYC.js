import React, { useState } from 'react';
import Card from './Card';
import ImageModal from './ImageModal';
import Nin_1 from './images/nintendo-nyc/NIN-NYC1.jpg';
import Nin_2 from './images/nintendo-nyc/NIN-NYC2.jpg';
import Nin_3 from './images/nintendo-nyc/NIN-NYC3.jpg';
import Nin_4 from './images/nintendo-nyc/NIN-NYC4.jpg';
import Nin_5 from './images/nintendo-nyc/NIN-NYC5.jpg';
import Nin_6 from './images/nintendo-nyc/NIN-NYC6.jpg';


const Nintendo_NYC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

   return (
    <div className="main-container">
      <h1 className="main-title">Nintendo NYC</h1>
      <p className="main-description">Recently, I had the pleasure of visiting the Nintendo Store in Manhattan. It was an absolute blast, brimming with an array of Nintendo treasures that would surely delight any fan. Eager to capture the magic, I snapped a series of photos during my visit. Please enjoy this gallery showcasing some of those moments.</p>
      <p className="main-description">CLICK ON A CARD TO SEE THE FULL IMAGE</p>
      <ImageModal isOpen={modalOpen} imageSrc={currentImage} closeModal={() => setModalOpen(false)} />
      <div className="card-container">
        <Card image={Nin_1} onClick={() => openModal(Nin_1)} />
        <Card image={Nin_2} onClick={() => openModal(Nin_2)} />
        <Card image={Nin_3} onClick={() => openModal(Nin_3)} />
      </div>
      <div className="card-container">
        <Card image={Nin_4} onClick={() => openModal(Nin_4)} />
        <Card image={Nin_5} onClick={() => openModal(Nin_5)} />
        <Card image={Nin_6} onClick={() => openModal(Nin_6)} />
      </div>
    </div>
  );
}

export default Nintendo_NYC;
