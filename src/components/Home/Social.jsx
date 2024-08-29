import React from 'react'
import { Socialcss } from './Style'


const Social = () => {
  return (

    <Socialcss>
    
    <div className='home__social'>
        <a href="https://www.linkedin.com/in/shivam-gupta-57329123a/" className='home__social-icon' target="_blank">
        <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://www.instagram.com/increvil_shivam_/" className='home__social-icon' target="_blank">
        <i className="uil uil-instagram"></i>
        </a>
      
        <a href="https://github.com/ShivamGupta0306" className='home__social-icon' target="_blank">
        <i className="uil uil-github-alt"></i>
        </a>
    </div>
    </Socialcss>
  )
}

export default Social
