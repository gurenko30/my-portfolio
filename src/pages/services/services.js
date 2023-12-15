
import React, { useState } from 'react';
import './services.css';
import Modal from 'react-modal';

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  return (
    <div className="services-container">
      <h2>Мои услуги</h2>


      <div className="service" onClick={() => openModal('/25.png')}>
        <img src="/25.png" alt="Frontend Development" />
        <h3>Фронтенд-разработка</h3>
        <p>Я специализируюсь на создании адаптивных и удобных интерфейсов с использованием современных интерфейсных технологий, таких как React, или Vue.js.</p>
      </div>


      <div className="service" onClick={() => openModal('/26.png')}>
        <img src="/26.png" alt="Full Stack Development" />
        <h3>Полноценная разработка</h3>
        <p>Создание комплексных решений путем объединения интерфейсных и серверных технологий для обеспечения бесперебойного и интегрированного взаимодействия с пользователем</p>
      </div>


      <div className="service" onClick={() => openModal('/27.png')}>
        <img src="/27.png" alt="Responsive Design" />
        <h3>Адаптивный дизайн</h3>
        <p>Обеспечение того, чтобы веб-сайты и приложения хорошо выглядели и функционировали на различных устройствах и размерах экрана для оптимального взаимодействия с пользователем.</p>
      </div>




      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Закрыть</button>
        <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
      </Modal>
    </div>
  );
}

export default Services;
