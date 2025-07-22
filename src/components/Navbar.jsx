import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cFLW2FSEra53yRUDHvVb5p7_q4wtOpzFZg&s"
            className="w-20 h-20 border-2 border-white shadow-xl rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/aaditya1963995/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>

        <a
          href='https://github.com/dashboard'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
        >
          <FaGithub />
        </a>

        <a
          href='https://www.instagram.com/aaditya1963995/'  // corrected URL
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>

        <a
          href='https://t.me/aaditya1963995'  // corrected Telegram URL format
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Telegram'
        >
          <FaTelegram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
