import React from 'react';

function ImageModal({ isOpen, imageSrc, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={imageSrc} alt="Expanded view" />
      </div>
    </div>
  );
}

export default ImageModal;
