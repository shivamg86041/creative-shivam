import React from 'react'
import { Wrapper } from './Style'

const ScrollUp = () => {
    window.addEventListener("scroll",function(){
        const scrollUp= document.querySelector('.scrollup');
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <Wrapper>
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon">

            </i>
        </a>
    </Wrapper>
  )
}

export default ScrollUp
