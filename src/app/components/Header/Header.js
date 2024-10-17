'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const HeaderTem = () => {
  const router = useRouter();
  const { auth, name } = useAuth();
  const [navVisible, setNavVisible] = useState(false);

  const handleLoginClick = () => {
    router.push('/routes/login');
  };

  const handleLogoutClick = () => {
    // Clear the token cookie and reload the page
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/routes/login');
  };

  const handleToggleNav = () => {
    // Toggle the visibility of the navigation bar
    setNavVisible(!navVisible);
  };

  const trimmedName = name.length > 10 ? name.slice(0, 10) + '...' : name;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="Header">
        <div className="containerStyles">
          <div className="header_logo">
            <a href="/"><img src="/sathyabama_title.png" alt="logo" className="img-fluid" /></a>
          </div>
          <div className="header_buttoncontainer">
            {!auth && (
              <button className="buttonStyles" onClick={handleLoginClick}>
                LOGIN
              </button>
            )}
            {auth && (
              <button className="buttonStyles" onClick={handleLogoutClick}>
                LOGOUT
              </button>
            )}
          </div>
          <button className="menuButton" onClick={handleToggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`topnav ${navVisible ? 'responsive' : ''}`} id="myTopnav">
          <a href="/">HOME</a>
          <a href="/routes/Posts">POST</a>
          <a href="/routes/Alumni">ALUMNI</a>
          <a href="/routes/Events">EVENTS</a>
          <a href="/routes/Gallery">GALLERY</a>
          <a href="/routes/AboutUs">ABOUT US</a>
          <a href="/routes/ContactUs">CONTACT</a>
          {auth && (
            <a className="profileBtn" href="/routes/profile">
              <FontAwesomeIcon icon={faUser} />
              <span className="profileName">{trimmedName}</span>
            </a>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderTem;
