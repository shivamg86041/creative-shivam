import React, { useState, useEffect } from 'react';
import { Wrapper } from './Style';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function(){
      const header = document.querySelector('.header');
      if(this.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    });
  }, []);

  const toggleVisibility = () => {
    setToggle(!toggle);
  }

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  }

  return (
    <Wrapper>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">Shivam.</a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" 
                  className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#home")}>
                  <i className='uil uil-estate nav__icon'></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className={activeNav === "#about"? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#about")}>
                  <i className='uil uil-user nav__icon'></i>About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className={activeNav === "#skills"? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#skills")}>
                  <i className='uil uil-file-alt nav__icon'></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className={activeNav === "#services"? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#services")}>
                  <i className='uil uil-briefcase-alt nav__icon'></i>Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className={activeNav === "#portfolio"? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#portfolio")}>
                  <i className='uil uil-scenery nav__icon'></i>Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className={activeNav === "#contact"? "nav__link active-link" : "nav__link"}
                  onClick={() => setActiveNav("#contact")}>
                  <i className='uil uil-message nav__icon'></i>Contact
                </a>
              </li>
            </ul>

            <i className='uil uil-times nav__close' onClick={toggleVisibility}></i>
          </div>

          <div className='nav__toggle'>
            <i className='uil uil-apps' onClick={toggleVisibility}></i>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
}

export default Header;
