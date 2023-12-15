import React, { useState } from 'react';

import './header.css'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header>
        <h1>Портфолио</h1>


      </header>


      <nav>


        <a href="/" className="glow-on-hover">


          <button type="button">ГЛАВНАЯ</button>


        </a>
        <a href="/projects" className="glow-on-hover">


          <button type="button">ПРОЕКТЫ</button>


        </a>
        <a href="/gallery" className="glow-on-hover">


          <button type="button">ГАЛЕРЕЯ</button>


        </a>
        <a href="/contacts" className="glow-on-hover">


          <button type="button">КОНТАКТЫ</button>
        </a>
        <a href="/services" className="glow-on-hover">


        <button type="button">УСЛУГИ</button>
        </a>
      
        <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="public/static/images/avatar/2.jpg"
          sx={{ width: 60, height: 60, marginLeft: 'auto' }}
          onClick={handleAvatarClick}
        />

        <Modal open={isModalOpen} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         
          <div className="modal-content">
            <Avatar
              alt="Remy Sharp"
              src="public/static/images/avatar/2.jpg"
              sx={{ width: '200px', height: '200px' }}
              onClick={handleCloseModal}
            />
            <h1>Гуренко Кристина Викторовна</h1>
            <p>студент: Московского финансово-промышленный университета «Синергия»</p>
            <p>Факультет дополнительного образования </p>
            <p>Веб-дизайн и разработка сайтов</p>
            <p>ИВДРС-1013</p>
          </div>
        </Modal>
        </Stack>


      </nav >



    </>
  );
};


export default Header;