import React from 'react'
import { Wrapper } from './Style'

const Footer = () => {
  return (
    <Wrapper>
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    Shivam
                </h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    {/* <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/shivam-gupta-57329123a/" className='footer__social-link' target="_blank">
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/increvil_shivam_/" className='footer__social-link' target="_blank">
                    <i className="bx bxl-instagram"></i>
                    </a>
                
                    <a href="https://github.com/ShivamGupta0306" className='footer__social-link' target="_blank">
                    <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Shivam Gupta. All  Rights reserved</span>
            </div>
        </footer>
    </Wrapper>
  )
}

export default Footer
