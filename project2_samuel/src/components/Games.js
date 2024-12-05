import React, { useState } from 'react';
import Card from './Card';
import ImageModal from './ImageModal';
import Mario from './images/favorite-games/super-mario.jpg';
import KH2 from './images/favorite-games/KH2-BoxArt.jpg';
import Pit from './images/favorite-games/Kid-Icarus.jpg';
import GH3 from './images/favorite-games/GH3-LOR.jpg';
import SBB from './images/favorite-games/SSB-Brawl.jpg';
import Minecraft from './images/favorite-games/Minecraft.jpg';


const Games = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

   return (
    <div className="main-container">
      <h1 className="main-title">Favorite Games</h1>
      <p className="main-description">Here are my top six favorite games of all time. These titles have profoundly influenced who I am today, and I highly recommend playing them if you ever get the chance!</p>
      <p className="main-description">CLICK ON A CARD TO SEE THE FULL IMAGE</p>
      <ImageModal isOpen={modalOpen} imageSrc={currentImage} closeModal={() => setModalOpen(false)} />
      <div className="card-container">
        <Card image={Mario} onClick={() => openModal(Mario)} />
        <Card image={KH2} onClick={() => openModal(KH2)} />
        <Card image={Pit} onClick={() => openModal(Pit)} />
      </div>
      <div className="card-container">
      <Card title="" description="" image={GH3} onClick={() => openModal(GH3)} />
      <Card title="" description="" image={SBB} onClick={() => openModal(SBB)} />
      <Card title="" description="" image={Minecraft} onClick={() => openModal(Minecraft)} />
      </div>
    </div>
  );
}

export default Games;


