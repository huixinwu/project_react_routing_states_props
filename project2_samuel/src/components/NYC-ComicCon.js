import React, { useState } from 'react';
import Card from './Card';
import ImageModal from './ImageModal';
import img1 from './images/ny-comiccon/IMG_1.jpg';
import img2 from './images/ny-comiccon/IMG_2.jpg';
import img3 from './images/ny-comiccon/IMG_3.jpg';
import img4 from './images/ny-comiccon/IMG_4.jpg';
import img5 from './images/ny-comiccon/IMG_5.jpg';
import img6 from './images/ny-comiccon/IMG_6.jpg';

const ComicCon = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

   return (
    <div className="main-container">
      <h1 className="main-title">NYC Comic Con</h1>
      <p className="main-description">Attending NYC Comic Con is an absolute blast! Each year, I eagerly anticipate immersing myself in a world brimming with comics, art, geeky delights, and so much more. Last year, I had the incredible opportunity to cosplay as one of my favorite characters, Sora from Kingdom Hearts. While there, I had the pleasure of meeting other talented cosplayers and capturing unforgettable moments in photos. The excitement and creativity of Comic Con always leave me eagerly awaiting the next adventure. Take a peek at these fantastic images and experience the magic for yourself!</p>
      <p className="main-description">CLICK ON A CARD TO SEE THE FULL IMAGE</p>
      <ImageModal isOpen={modalOpen} imageSrc={currentImage} closeModal={() => setModalOpen(false)} />
      <div className="card-container">
        <Card image={img1} onClick={() => openModal(img1)} />
        <Card image={img2} onClick={() => openModal(img2)} />
        <Card image={img3} onClick={() => openModal(img3)} />
      </div>
      <div className="card-container">
        <Card image={img4} onClick={() => openModal(img4)} />
        <Card image={img5} onClick={() => openModal(img5)} />
        <Card image={img6} onClick={() => openModal(img6)} />
      </div>
    </div>
  );
}

export default ComicCon;

